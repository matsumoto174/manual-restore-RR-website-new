"use client"

import { useState } from "react"
import Image from "next/image"

export function DogWidget() {
  const [showMessage, setShowMessage] = useState(true)

  const handleClick = () => {
    const charitySection = document.getElementById("charity-section")
    if (charitySection) {
      charitySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* iMessage-style bubble */}
      {showMessage && (
        <div className="relative animate-in fade-in slide-in-from-right-2 duration-500">
          <button
            onClick={() => setShowMessage(false)}
            className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-muted-foreground/20 hover:bg-muted-foreground/30 flex items-center justify-center text-[10px] text-foreground/50"
            aria-label="Close message"
          >
            ×
          </button>
          <div className="bg-white text-foreground px-4 py-2 rounded-[18px] shadow-md text-sm font-medium whitespace-nowrap">
            we ❤️ dogs
          </div>
        </div>
      )}

      {/* Circular dog widget */}
      <button
        type="button"
        onClick={handleClick}
        className="group relative w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 bg-transparent"
        aria-label="Scroll to dog charity section"
      >
        {/* Transparent circular container with image fill */}
        <div className="absolute inset-0 bg-transparent">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iHeart-Dogs-Logo_400x-4fYeeQ29kyH4jHkfL8chMF9PwXRXyv.avif"
            alt="iHeart Dogs"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </button>
    </div>
  )
}
