"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "You vs an in-house SDR?",
    answer:
      "SDRs will take at least a month to train + a month to get warmed up to the job. You will need to pay for and install all of the tech infrastructure for SDRs. SDRs will need to be paid monthly regardless of performance. They don't have as strong incentives to perform as we do. SDRs don't have the experience we do.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "1-1.5 hours before campaign launch (1 meeting where we ask you questions). 0 hours afterwards (you only show up to the sales calls). We do encourage you to open up as much availability on your calendar as possible to make it easy for your future clients to book with you.",
  },
  {
    question: "Do I need to come prepared with a good offer or a piece of copywriting?",
    answer:
      "No, we take care of crafting a compelling, persuasive offer and writing cold email copy for you.",
  },
  {
    question: "How do you qualify the leads?",
    answer:
      "We use a multi-step qualification process that includes verifying the prospect's role, company size, budget authority, and genuine interest in your service before booking them on your calendar.",
  },
  {
    question: "Do you charge for no-shows?",
    answer:
      "No.",
  },
  {
    question: "How long until we see results?",
    answer:
      "Usually 1 week after campaign launch.",
  },
  {
    question: "How quickly can we launch?",
    answer:
      "3 working days is the soonest. Usually 1 working week.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="rounded-[2rem] bg-secondary overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
    </section>
  )
}
