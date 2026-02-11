"use client"

import { TrendingUp, Users, BarChart3, Target, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const results = [
  {
    title: "NASDAQ-listed biotechnology company",
    description:
      "A tiny Total Addressable Market with a very unique, very specific Ideal Customer Profile. Most agencies wouldn't have bothered. We delivered 12 booked calls in the very first 7 days + more afterwards.",
    icon: TrendingUp,
    stat: "12 calls in 7 days",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20A%20NASDAQ%20listed%20biotechnology%20comapny-JFQNQbuld0JOpMmzIYZwSSSYWgJ48v.png",
  },
  {
    title: "Financial services consultant",
    description:
      "14 Zoom calls + 7 phone calls for a financial services consultant, 19 more in the pipeline. Not much to say here, this is our typical campaign size. Great offer = great results.",
    icon: Users,
    stat: "21 calls, 19 more interested",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.%20TomNGResults-8xyxlXV8u5yZpNdnVI58LZbOegDBzW.png",
  },
  {
    title: "A wedding and events venue",
    description:
      "A micro campaign. The smallest we've done. But size doesn't matter, it's how you use it! 18 booked calls from barely 100 people. Not 0.15% call booked rate, not 1.5% call booked rate - 15%!",
    icon: BarChart3,
    stat: "15% call booked rate, bonkers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.%20micro%20wedding%20and%20event%20venue-PX1ZAeUZnvHjSWdAOuKuf4tt37FKqw.png",
  },
  {
    title: "One of our own campaigns",
    description:
      "You are reading this because you are one of the people from a campaign like the one above. 3rd wall broken, real humans here. We practice what we preach - we grow your business like we grow our own. We never ran a single ad or wrote an SEO article. Yet 8 clients converted from the campaign above.",
    icon: Target,
    stat: "We practice what we preach",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.%20FCMO%20-%20we%20do%20it%20for%20ourselves-39LjEjujLyXmCGEsidkwWPYAwkB6B0.png",
  },
]

function ResultCard({ result, onImageClick }: { result: (typeof results)[0], onImageClick: (image: string) => void }) {
  const Icon = result.icon
  return (
    <div className="rounded-[2rem] bg-primary p-4 md:p-8 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <span className="font-heading text-2xl font-bold text-accent">
          {result.stat}
        </span>
      </div>
      {result.image ? (
        <div 
          className="w-full h-88 rounded-2xl overflow-hidden bg-white cursor-pointer"
          onClick={() => onImageClick(result.image!)}
        >
          <Image
            src={result.image}
            alt={result.title}
            width={800}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-88 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
          <BarChart3 className="w-16 h-16 text-primary-foreground/20" />
        </div>
      )}
      <h3 className="font-heading text-xl font-semibold text-primary-foreground">
        {result.title}
      </h3>
      <p className="text-sm leading-relaxed text-primary-foreground/70">
        {result.description}
      </p>
    </div>
  )
}

function CaseStudyCard({ onImageClick }: { onImageClick: (image: string) => void }) {
  const images = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XO%20dashboard-QP5fjOvSc91LRNqwIufnAEbwbWVutx.png",
      alt: "Marketing agency analytics dashboard"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XO%20multiple%20niches%20list-U2mtdlmR2Ikp9WcK8m4WclCQ4Oo151.png",
      alt: "Multiple niches campaign list"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XO%20Targeted%20list-Ae6TN9b1k0qIaGSkLnebrvJGKGiPeI.png",
      alt: "Targeted industries campaign list"
    }
  ]

  return (
    <div className="rounded-[2rem] bg-primary p-4 md:p-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center md:hidden">
          <BarChart3 className="w-6 h-6 text-accent" />
        </div>
        <span className="font-heading text-2xl font-bold text-accent">
          Over 200 leads in 6 months
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5">
        {images.map((image) => (
          <div 
            key={image.src}
            className="rounded-2xl overflow-hidden bg-white h-[200px] cursor-pointer"
            onClick={() => onImageClick(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <h3 className="font-heading text-xl font-semibold text-primary-foreground">
        Marketing agency
      </h3>

      <div>
        <p className="text-sm leading-relaxed text-primary-foreground/70">
          A marketing agency with which we worked for close to a year total, generating over a hundred leads every couple of months - the owner would mercilessly slash leads that he was not interested in, in the end resulting in 229 cherry-picked, highest-quality leads handpicked over 6 months. We ran both targeted campaigns for specific niches, as well as large general campaigns targeting by business size. Strong offers beat overengineering any day.
        </p>
      </div>
    </div>
  )
}

export function ResultsSection() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <section className="bg-background pt-16 md:pt-24 pb-8 md:pb-12">
      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setModalImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl max-h-[90vh] w-full h-full relative">
            <Image
              src={modalImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Our results speak for themselves
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result) => (
            <ResultCard key={result.title} result={result} onImageClick={setModalImage} />
          ))}
          <div className="md:col-span-2">
            <CaseStudyCard onImageClick={setModalImage} />
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          <div className="inline-block bg-accent rounded-[2rem] px-6 py-4 max-w-3xl">
            <p className="text-sm leading-relaxed text-white">
              + a wide range of clients across various industries such as SaaS, design services, ad agencies, logistics consultants, financial services, construction and more.
            </p>
          </div>
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
