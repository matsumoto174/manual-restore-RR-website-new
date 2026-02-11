import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProcessTimeline } from "@/components/process-timeline"
import { ResultsSection } from "@/components/results-section"
import { RoiCalculator } from "@/components/roi-calculator"
import { ChannelsComparison } from "@/components/channels-comparison"
import { FaqSection } from "@/components/faq-section"
import { CharitySection } from "@/components/charity-section"
import { Footer } from "@/components/footer"
import { DogWidget } from "@/components/dog-widget"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProcessTimeline />
      <ResultsSection />
      <RoiCalculator />
      <ChannelsComparison />
      <FaqSection />
      <CharitySection />
      <Footer />
      <DogWidget />
    </main>
  )
}
