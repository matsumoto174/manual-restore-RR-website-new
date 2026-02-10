import { PaperAirplanes } from "./paper-airplanes"

export function Hero() {
  return (
    <section className="relative bg-background py-24 md:py-32 lg:py-40 overflow-hidden">
      <PaperAirplanes />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pointer-events-none">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary text-balance">
          Get 10 sales calls a month with your ideal clients on a pay-per-call basis
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground max-w-2xl mx-auto text-pretty">
          We do all of the work. You only show up to the meetings. Your sales headache is finally gone, without taking a risk. We eat what we kill.
        </p>
        <div className="mt-10 pointer-events-auto">
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
