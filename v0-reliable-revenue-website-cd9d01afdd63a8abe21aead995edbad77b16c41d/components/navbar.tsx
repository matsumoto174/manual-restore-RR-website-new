"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDogLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const charitySection = document.getElementById('charity-section')
    if (charitySection) {
      charitySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-transparent">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RR%20logo%201-scBFLAiPW3wl92YVoeNtU4PxyQMedq.png"
                alt="Reliable Revenue"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-bold text-lg text-primary">Reliable Revenue</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#charity-section" 
            onClick={handleDogLogoClick}
            className="w-8 h-8 rounded-full overflow-hidden bg-transparent transition-transform hover:scale-110 cursor-pointer"
            aria-label="Go to dog charity section"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iHeart-Dogs-Logo_400x-4fYeeQ29kyH4jHkfL8chMF9PwXRXyv.avif"
              alt="iHeart Dogs"
              width={32}
              height={32}
              className="w-full h-full object-cover object-center"
            />
          </a>
          <a
            href="https://calendly.com/ilya-reliablerevenue/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book A Call
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          <a
            href="https://calendly.com/ilya-reliablerevenue/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Book A Call
          </a>
        </div>
      )}
    </nav>
  )
}
