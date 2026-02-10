import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-transparent">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RR%20logo%201-scBFLAiPW3wl92YVoeNtU4PxyQMedq.png"
                  alt="Reliable Revenue"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-bold text-lg text-primary-foreground">Reliable Revenue</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Get 10 sales calls a month with your ideal clients on a pay-per-call basis
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Resources</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#process" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">The Process</a></li>
              <li><a href="#results" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Our Results</a></li>
              <li><a href="#roi" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Returns Calculator</a></li>
              <li><a href="#why-cold-email" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Why Cold Email</a></li>
              <li><a href="#faq" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#charity-section" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Dog Charity</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="https://www.linkedin.com/in/reliablerevenue/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://calendly.com/ilya-reliablerevenue/new-meeting" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Book A Call</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            2026 Reliable Revenue. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://docs.google.com/document/d/1ZlAR9uf6zOpL2ZSNag00NfU5pFkWx21h9-0pth31uYs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/1r2LIJryF6RxPnbv4eLE8pkSS_J-NcK4xM1dy11G28IE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
