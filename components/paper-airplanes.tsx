"use client"

import { useEffect, useRef, useCallback } from "react"

const LANE_COUNT = 8
const PLANES_PER_LANE = 3
const PLANE_COLOR = "#2ECC71"
const BASE_PLANE_COLOR = "#2ECC71" // Declared BASE_PLANE_COLOR variable

// Each lane: yFrac (vertical position), speed, size (20% larger), opacity, undulation amplitude & frequency
const LANE_CONFIG = [
  { yFrac: 0.06, speed: 72, size: 30, opacity: 0.50, amp: 14, freq: 3.2 },
  { yFrac: 0.18, speed: 57, size: 28, opacity: 0.46, amp: 20, freq: 2.5 },
  { yFrac: 0.30, speed: 65, size: 25, opacity: 0.42, amp: 12, freq: 3.8 },
  { yFrac: 0.42, speed: 50, size: 22, opacity: 0.37, amp: 18, freq: 3.0 },
  { yFrac: 0.54, speed: 60, size: 19, opacity: 0.33, amp: 22, freq: 2.2 },
  { yFrac: 0.66, speed: 45, size: 18, opacity: 0.28, amp: 15, freq: 3.5 },
  { yFrac: 0.78, speed: 53, size: 16, opacity: 0.24, amp: 18, freq: 2.8 },
  { yFrac: 0.90, speed: 40, size: 14, opacity: 0.20, amp: 13, freq: 3.6 },
]

// 15 degree angle
const ANGLE_TAN = Math.tan((15 * Math.PI) / 180)

interface PlaneState {
  progress: number
  laneIndex: number
  phaseOffset: number // unique per-plane sine phase offset
}

export function PaperAirplanes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const planesRef = useRef<PlaneState[]>([])
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const dimRef = useRef({ w: 0, h: 0 })

  const initPlanes = useCallback(() => {
    const planes: PlaneState[] = []
    // Spread planes well across the screen
    const offsets = [
      0.02, 0.68, 0.15, 0.82, 0.35, 0.95, 0.50, 0.10,
      0.72, 0.28, 0.88, 0.42, 0.60, 0.05, 0.78, 0.38,
    ]
    let idx = 0
    for (let lane = 0; lane < LANE_COUNT; lane++) {
      for (let p = 0; p < PLANES_PER_LANE; p++) {
        const startProgress = offsets[idx % offsets.length]
        planes.push({
          progress: startProgress * 1.3 - 0.15, // spread across -0.15 to 1.15
          laneIndex: lane,
          phaseOffset: (lane * 1.7 + p * 3.3) % (Math.PI * 2),
        })
        idx++
      }
    }
    planesRef.current = planes
  }, [])

  // Baseline Y with undulation (sine wave added)
  const getBaselineY = useCallback(
    (laneIndex: number, progressX: number, w: number, h: number, phaseOffset: number) => {
      const lane = LANE_CONFIG[laneIndex]
      const centerY = lane.yFrac * h
      const xPixel = progressX * w
      // 15 deg slope
      const slopeOffset = (w * 0.5 - xPixel) * ANGLE_TAN
      // Sine undulation
      const undulation = Math.sin(progressX * Math.PI * 2 * lane.freq + phaseOffset) * lane.amp
      return centerY + slopeOffset + undulation
    },
    []
  )

  // Bent Y with mouse push (smooth repulsion)
  const getBentY = useCallback(
    (
      laneIndex: number,
      progressX: number,
      w: number,
      h: number,
      mx: number,
      my: number,
      phaseOffset: number
    ) => {
      const baseY = getBaselineY(laneIndex, progressX, w, h, phaseOffset)
      const xPixel = progressX * w

      const dx = xPixel - mx
      const dy = baseY - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const pushRadius = Math.min(w, h) * 0.4
      if (dist > pushRadius) return baseY

      // Smooth easing curve for push strength
      const pushStrength = 1 - dist / pushRadius
      const easedPush = pushStrength * pushStrength * pushStrength
      const pushAmount = easedPush * 120
      // Push away from cursor instead of toward it
      return baseY - (my - baseY) * (pushAmount / 120) * 0.5
    },
    [getBaselineY]
  )

  const drawPlane = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, angle: number, color: string) => {
      ctx.save()
      ctx.translate(x, y)
      // Base rotation: +30 degrees to align 45-degree SVG to 15-degree path
      ctx.rotate(angle + (30 * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Telegram paper airplane SVG path
      // Original viewBox is 24x24, scale to size
      const scale = size / 12 // size represents roughly half of the viewBox width
      ctx.scale(scale, scale)
      ctx.translate(-12, -12) // Center the icon

      ctx.fillStyle = color
      ctx.beginPath()
      // Path from the provided SVG
      ctx.moveTo(19.2, 4.4)
      ctx.lineTo(2.9, 10.7)
      ctx.bezierCurveTo(1.8, 11.1, 1.8, 11.8, 2.7, 12.0)
      ctx.lineTo(6.8, 13.3)
      ctx.lineTo(8.4, 18.1)
      ctx.bezierCurveTo(8.6, 18.6, 8.5, 18.8, 9.0, 18.8)
      ctx.bezierCurveTo(9.4, 18.8, 9.6, 18.6, 9.8, 18.4)
      ctx.bezierCurveTo(9.9, 18.3, 10.8, 17.4, 11.8, 16.4)
      ctx.lineTo(16.0, 19.5)
      ctx.bezierCurveTo(16.8, 19.9, 17.3, 19.7, 17.5, 18.8)
      ctx.lineTo(20.3, 5.7)
      ctx.bezierCurveTo(20.6, 4.6, 19.9, 4.0, 19.2, 4.4)
      ctx.closePath()
      ctx.fill()

      // Inner detail path
      ctx.beginPath()
      ctx.moveTo(17.1, 7.4)
      ctx.lineTo(9.3, 14.5)
      ctx.lineTo(9.0, 17.8)
      ctx.lineTo(7.4, 13.0)
      ctx.lineTo(16.6, 7.2)
      ctx.bezierCurveTo(17.0, 6.9, 17.4, 7.1, 17.1, 7.4)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    },
    []
  )

  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      if (!lastTimeRef.current) lastTimeRef.current = time
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1)
      lastTimeRef.current = time

      const w = container.offsetWidth
      const h = container.offsetHeight

      if (w !== dimRef.current.w || h !== dimRef.current.h) {
        dimRef.current = { w, h }
        canvas.width = w * window.devicePixelRatio
        canvas.height = h * window.devicePixelRatio
        canvas.style.width = `${w}px`
        canvas.style.height = `${h}px`
      }

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
      ctx.clearRect(0, 0, w, h)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const plane of planesRef.current) {
        const config = LANE_CONFIG[plane.laneIndex]

        // Calculate plane position for distance check
        const planeX = plane.progress * w
        const planeY = getBentY(plane.laneIndex, plane.progress, w, h, mx, my, plane.phaseOffset)

        // Check distance to mouse for speed boost
        const dxM = planeX - mx
        const dyM = planeY - my
        const distToMouse = Math.sqrt(dxM * dxM + dyM * dyM)
        const hoverRadius = 140
        const isNearMouse = distToMouse < hoverRadius

        // Speed boost when near mouse
        const speedMultiplier = isNearMouse ? 2.8 : 1.0
        const speed = (config.speed / w) * speedMultiplier
        plane.progress += speed * dt

        // Wrap around
        if (plane.progress > 1.15) {
          plane.progress = -0.15
        }

        // Calculate tangent angle from path
        const eps = 0.005
        const y1 = getBentY(plane.laneIndex, plane.progress - eps, w, h, mx, my, plane.phaseOffset)
        const y2 = getBentY(plane.laneIndex, plane.progress + eps, w, h, mx, my, plane.phaseOffset)
        const tangentAngle = Math.atan2(y2 - y1, eps * 2 * w)

        // Draw plane with constant size and opacity
        drawPlane(ctx, planeX, planeY, config.size, config.opacity, tangentAngle, PLANE_COLOR)
      }

      rafRef.current = requestAnimationFrame(animate)
    },
    [getBentY, drawPlane]
  )

  useEffect(() => {
    initPlanes()

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect()
      const touch = e.touches[0]
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("touchmove", handleTouchMove, { passive: true })
    container.addEventListener("touchend", handleTouchEnd)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(rafRef.current)
    }
  }, [initPlanes, animate])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
