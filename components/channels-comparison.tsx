export function ChannelsComparison() {
  const rows = [
    {
      factor: "Price",
      coldEmail: (
        <>
          <strong>With us:</strong> Pay-per-result, no monthly fees. <strong>Others:</strong> $3k–$5k every month.
        </>
      ),
      coldCalling: "$6k–$9k every month for callers without a strong accent.",
      seo: "Tens of thousands before results. $2k–$4k every month.",
      ppc: "$5,000 every month average ($2,500 fee + $2,500 ad spend).",
      highlight: "coldEmail",
    },
    {
      factor: "Time to Results",
      coldEmail: (
        <>
          <strong>With us:</strong> 2 weeks. <strong>Others:</strong> 2 or 5 weeks.
        </>
      ),
      coldCalling: "2 weeks.",
      seo: "A very painful 12 months.",
      ppc: "1–2 months of optimizing, tweaking, and burning money.",
      highlight: "coldEmail",
    },
    {
      factor: "Intrusion / Receptivity",
      coldEmail: "Can be read at the prospect's convenience with no pressure; they can give your offer full attention.",
      coldCalling: "Everybody hates cold calls. Invasive, pressuring, and catches people at the wrong time.",
      seo: "Fantastic.",
      ppc: "Often ignored (Ad Blindness).",
      highlight: "coldEmail",
    },
    {
      factor: "Targeting Precision",
      coldEmail: "Surgical.",
      coldCalling: "Surgical. Always the right person, never the right time.",
      seo: "Non-existent.",
      ppc: "Reasonable / Good.",
      highlight: "coldEmail",
    },
    {
      factor: "The Verdict",
      coldEmail: "A very cost-effective medium-term solution. If your TAM is large, can be a steady long-term solution.",
      coldCalling: "A fantastic way to piss off your prospects.",
      seo: "Will bring you the most clients, but takes extremely long and is expensive. Great for the long term.",
      ppc: "A fantastic way to burn cash.",
      highlight: "coldEmail",
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Why cold email?
        </h2>

        <div className="rounded-[2rem] bg-secondary overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-5 font-heading font-semibold text-primary text-left min-w-[140px]">
                    Factor
                  </th>
                  <th className="px-6 py-5 font-heading font-semibold text-primary text-left min-w-[200px] bg-accent/10">
                    Cold Email
                  </th>
                  <th className="px-6 py-5 font-heading font-semibold text-primary text-left min-w-[200px]">
                    Cold Calling
                  </th>
                  <th className="px-6 py-5 font-heading font-semibold text-primary text-left min-w-[200px]">
                    SEO
                  </th>
                  <th className="px-6 py-5 font-heading font-semibold text-primary text-left min-w-[200px]">
                    Paid Ads (PPC)
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={row.factor}
                    className={rowIndex < rows.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground align-top">
                      {row.factor}
                    </td>
                    <td className="px-6 py-4 text-foreground align-top bg-accent/10 font-medium">
                      {row.coldEmail}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground align-top">{row.coldCalling}</td>
                    <td className="px-6 py-4 text-muted-foreground align-top">{row.seo}</td>
                    <td className="px-6 py-4 text-muted-foreground align-top">{row.ppc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
