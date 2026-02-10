import Image from "next/image"
import { Heart, ExternalLink } from "lucide-react"

export function CharitySection() {
  return (
    <section id="charity-section" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 mb-6">
              <Heart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground">Giving Back</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Every reply feeds a pupper!
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              Your reply - negative or positive - feeds a fluffy pupper! We donate 1 meal to 1 shelter dog for every reply. So please reply! Your reply creates a gift of a full belly to a gooddest dogger out there.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              The charity we donate to is GreaterGood.org in partnership with iHeartDogs.com
            </p>
            <a
              href="https://greatergood.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/30"
            >
              <Heart className="w-4 h-4" />
              Donate to GreaterGood.org directly
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/goodie_woodie-NwUujHhENOwMIPs697Nxkvi9snLqDB.jpg"
                alt="Happy rescue dog with heterochromia"
                width={1000}
                height={1000}
                className="rounded-[2rem] w-full h-64 object-cover"
              />
            </div>
            <div className="dog-tilt-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fluffer_1-5MxG4WFWYRNVJ0nYgmIeZPBwGdvAZE.png"
                alt="Rescued Siberian Husky"
                width={600}
                height={600}
                className="rounded-[2rem] w-full h-48 object-cover"
              />
            </div>
            <div className="dog-tilt-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/absolutest_good_pupper_2-C2VzahklbqSDMX5T8SqfocDI3zGivc.png"
                alt="Happy rescued German Shepherd"
                width={515}
                height={687}
                className="rounded-[2rem] w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
