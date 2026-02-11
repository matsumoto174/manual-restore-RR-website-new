"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "We meet with you to learn everything about you",
    subtitle: "",
    dayLabel: "",
    description:
      "We ask about your target audience, your competition, and how you do what you do, among 100 other things.\nWe take notes and use that to craft a strong offer and write effective cold email copy.",
  },
  {
    number: "02",
    title: "We handle hours of technical grunt work",
    subtitle: "",
    dayLabel: "Day 1",
    description:
      "Purchase new sending domains\nPurchase Google Workspace subscriptions\nCreate sending accounts\nConfigure DNS: SPF, DKIM, DMARC, forwarding, catch-all rules, etc.\nSet up the sending platform\nConnect and configure accounts, sending limits, warmup cadence and open/reply levels, active campaign and backup account grouping, etc.",
  },
  {
    number: "03",
    title: "We search high and low for your ideal clients' emails",
    subtitle: "",
    dayLabel: "Day 2",
    description:
      "Identify ICP\nForm a list of firmographic identifiers\nSearch databases\nScrape contact data\n\nEmail verification\nData cleaning\nContacts per company limit (max 2)\n\nRemove catchalls\nSeparate by MSP\nSeparate SEG prospects",
  },
  {
    number: "04",
    title: "We write effective cold email copy to convince prospects to buy from YOU",
    subtitle: "no AI here, all copy is written by hand + brain",
    dayLabel: "Days 3-5",
    description:
      "Forming a strong persuasive offer\nCold-email specific copywriting\nSubject and preview text\nFollow-up sequences\n\nLegal formatting\nSpintax\nHTML stripping\nA/Z variation",
  },
  {
    number: "05",
    title: "We launch and manage everything - responses, deliverability, calendar bookings, etc. You just show up to meetings.",
    subtitle: "",
    dayLabel: "Day 5 onwards",
    description:
      "Launch campaign\nLabel, manage, categorize leads\nMonitor deliverability, inbox testing, bounce management\n\nRespond to leads\nHandle objections\nFollow-up\n\nBook calls on Calendly\nFollow up before meetings to increase the show rate",
  },
  {
    number: "06",
    title: "You only pay for attended sales calls.",
    subtitle: "",
    dayLabel: "📅",
    description:
      "No-shows don't count.\nYou pay every Friday for meetings that took place that week.",
  },
  {
    number: "07",
    title: "Your business grows. No headache. You make more money. You are happy.",
    subtitle: "",
    dayLabel: "❤️🎉",
    description:
      "And we are glad to help!",
  },
]

function TimelineCard({
  step,
  index,
}: {
  step: (typeof steps)[0]
  index: number
}) {
  const [open, setOpen] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div
      className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-center`}
    >
      {/* Card */}
      <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full rounded-[2rem] bg-secondary p-6 text-left transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-heading text-2xl font-bold text-accent">
                {step.number}
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-xs text-muted-foreground mt-1">{step.subtitle}</p>
                )}
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>
          {open && (
            <ul className="mt-4 text-sm leading-relaxed text-muted-foreground list-disc list-inside space-y-1">
              {step.description.split('\n').map((line, i) => 
                line.trim() ? <li key={i}>{line.trim()}</li> : <li key={i} className="list-none h-2" />
              )}
            </ul>
          )}
        </button>
      </div>

      {/* Day Label or Image on opposite side */}
      {step.dayLabel && (
        <div className={`hidden md:block flex-1 ${isLeft ? "md:pl-12" : "md:pr-12 text-right"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
            {step.dayLabel}
          </span>
        </div>
      )}
      {step.number === "01" && !step.dayLabel && (
        <div className={`hidden md:block flex-1 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
          <div className="flex items-center gap-4">
            <img 
              src="/images/clr-cropped.jpg" 
              alt="Profile" 
              className="w-24 h-24 rounded-full object-cover shadow-lg shrink-0"
            />
            <p className="font-caveat text-2xl font-semibold text-primary leading-tight" style={{ filter: 'url(#chalk-effect)', transform: 'rotate(-5deg)' }}>
              Founder-led, end-to-end. You work directly with me.
            </p>
          </div>
        </div>
      )}
      {!step.dayLabel && step.number !== "01" && <div className="hidden md:block flex-1" />}
    </div>
  )
}

export function ProcessTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineRect = timelineRef.current.getBoundingClientRect()
      const viewportMiddle = window.innerHeight / 2
      
      // Calculate how far the timeline has scrolled
      const timelineTop = timelineRect.top
      const timelineHeight = timelineRect.height
      
      // Progress starts when timeline top reaches viewport middle
      const startPoint = viewportMiddle
      const scrolled = startPoint - timelineTop
      const progress = Math.max(0, Math.min(1, scrolled / timelineHeight))
      
      setScrollProgress(progress)

      // Check which milestones have been passed
      const newCompleted: number[] = []
      milestoneRefs.current.forEach((ref, index) => {
        if (!ref) return
        const rect = ref.getBoundingClientRect()
        const milestoneCenter = rect.top + rect.height / 2
        
        if (milestoneCenter < viewportMiddle) {
          newCompleted.push(index)
        }
      })
      
      setCompletedSteps(newCompleted)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="bg-background py-16 md:py-24" id="process">
      {/* SVG filter for chalk effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="chalk-effect">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.25" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.25" />
          </filter>
        </defs>
      </svg>
      
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          The Process
        </h2>

        <div className="relative" ref={timelineRef}>
          {/* Dotted center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-border -translate-x-px" />

          {/* Moving progress dot */}
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent z-20 transition-all duration-100"
            style={{
              top: `${scrollProgress * 100}%`,
              opacity: scrollProgress > 0 && scrollProgress < 1 ? 1 : 0,
            }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                <TimelineCard step={step} index={i} />
                {/* Milestone marker */}
                <div 
                  ref={(el) => { milestoneRefs.current[i] = el }}
                  className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  {completedSteps.includes(i) ? (
                    <div className="w-8 h-8 rounded-full bg-accent border-4 border-background flex items-center justify-center milestone-complete">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-border border-2 border-background" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
