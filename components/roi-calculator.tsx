"use client"

import { useState, useMemo } from "react"

const audienceSizes = [
  { label: "S", description: "very niche" },
  { label: "M", description: "industrial, trade" },
  { label: "L", description: "e.g. lawyer, consultant" },
  { label: "XL", description: "e.g. marketing, hiring" },
]

const confidenceLevels = [
  { label: "👎 I'm terrible at it" },
  { label: "🤷‍♂️ I'm average" },
  { label: "👍 Oh yeah, I know what I'm doing" },
]

// Deal ranges based on size + confidence combinations
const dealRanges: { [key: string]: { min: number; max: number; monthly?: boolean } } = {
  S1: { min: 1, max: 2 },
  S2: { min: 2, max: 3 },
  S3: { min: 3, max: 4 },
  M1: { min: 2, max: 3 },
  M2: { min: 4, max: 5 },
  M3: { min: 6, max: 7 },
  L1: { min: 4, max: 5 },
  L2: { min: 8, max: 11 },
  L3: { min: 12, max: 14 },
  XL1: { min: 3, max: 3, monthly: true },
  XL2: { min: 6, max: 6, monthly: true },
  XL3: { min: 8, max: 8, monthly: true },
}

export function RoiCalculator() {
  const [ltv, setLtv] = useState(10000)
  const [audienceIndex, setAudienceIndex] = useState(1)
  const [confidenceIndex, setConfidenceIndex] = useState(1)

  const results = useMemo(() => {
    const sizeLabel = audienceSizes[audienceIndex].label
    const confidenceLevel = confidenceIndex + 1
    const key = `${sizeLabel}${confidenceLevel}`
    const range = dealRanges[key]

    const minRevenue = range.min * ltv
    const maxRevenue = range.max * ltv

    return {
      dealRange: range,
      minRevenue,
      maxRevenue,
    }
  }, [ltv, audienceIndex, confidenceIndex])

  return (
    <section className="bg-primary py-16 md:py-24" id="roi">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground text-center mb-4">
          Returns calculator
        </h2>
        <p className="text-center text-primary-foreground/60 mb-14 max-w-xl mx-auto">
          See how much revenue our pay-per-call service could generate for your business.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="flex flex-col gap-8">
            {/* LTV Slider */}
            <div>
              <label className="block text-sm font-medium text-primary-foreground/80 mb-1">
                {"What is your customer's LifeTime Value? (LTV)"}
              </label>
              <p className="text-xs text-primary-foreground/50 mb-3">
                (e.g. if a client pays you $5k/mo for 12 months, LTV = $60k; if they pay you $10k one time, then LTV = $10k)
              </p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading text-3xl font-bold text-accent">
                  ${ltv.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={ltv}
                onChange={(e) => setLtv(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-primary-foreground/20 accent-accent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
              />
              <div className="flex justify-between text-xs text-primary-foreground/50 mt-1">
                <span>$2,000</span>
                <span>$100,000</span>
              </div>
            </div>

            {/* Audience Size */}
            <div>
              <label className="block text-sm font-medium text-primary-foreground/80 mb-3">
                How big is your target audience?
              </label>
              <div className="flex flex-col md:grid md:grid-cols-4 gap-3">
                {audienceSizes.map((size, i) => (
                  <button
                    key={size.label}
                    type="button"
                    onClick={() => setAudienceIndex(i)}
                    className={`rounded-2xl py-3 px-2 md:px-2 text-center md:text-center text-left pl-5 md:pl-2 transition-all ${
                      audienceIndex === i
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/15"
                    }`}
                  >
                    <span className="block font-heading text-lg font-bold">{size.label}</span>
                    <span className="block text-xs mt-0.5 opacity-70">{size.description}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Confidence */}
            <div>
              <label className="block text-sm font-medium text-primary-foreground/80 mb-3">
                Once you're in front of your ideal clients, are you confident in selling your service?
              </label>
              <div className="flex flex-col gap-3">
                {confidenceLevels.map((level, i) => (
                  <button
                    key={level.label}
                    type="button"
                    onClick={() => setConfidenceIndex(i)}
                    className={`rounded-2xl py-3 px-5 text-left text-sm font-medium transition-all ${
                      confidenceIndex === i
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/15"
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-5">
            <div className="rounded-[2rem] bg-primary-foreground/5 p-8 flex flex-col gap-6">
              <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                Your estimated results
              </h3>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <p className="text-sm text-primary-foreground/60 mb-2">Closed deals</p>
                  <p className="font-heading text-3xl font-bold text-accent">
                    {results.dealRange.min}{results.dealRange.min !== results.dealRange.max && `-${results.dealRange.max}`}
                    {results.dealRange.monthly && '+ every month'}
                  </p>
                </div>
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <p className="text-sm text-primary-foreground/60 mb-2">Revenue</p>
                  <div className="flex flex-col gap-1 md:gap-0">
                    <p className="font-heading text-2xl md:text-3xl font-bold text-accent break-words">
                      ${results.minRevenue.toLocaleString()}{results.minRevenue !== results.maxRevenue && `-$${results.maxRevenue.toLocaleString()}`}
                    </p>
                    {results.dealRange.monthly && (
                      <p className="font-heading text-xl md:text-3xl font-bold text-accent">
                        every month
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/ilya-reliablerevenue/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Book A Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
