import { Check, X, Minus } from "lucide-react"

const columns = ["Feature", "Us", "In-House SDR", "Other Agencies", "Doing It Yourself"]

const rows = [
  {
    feature: "Pay-per-call pricing",
    us: true,
    inhouse: false,
    agencies: false,
    yourself: false,
  },
  {
    feature: "Qualified leads only",
    us: true,
    inhouse: "partial",
    agencies: "partial",
    yourself: false,
  },
  {
    feature: "Zero upfront risk",
    us: true,
    inhouse: false,
    agencies: false,
    yourself: true,
  },
  {
    feature: "Dedicated outreach team",
    us: true,
    inhouse: true,
    agencies: "partial",
    yourself: false,
  },
  {
    feature: "Multi-channel campaigns",
    us: true,
    inhouse: "partial",
    agencies: true,
    yourself: "partial",
  },
  {
    feature: "Predictable monthly cost",
    us: true,
    inhouse: false,
    agencies: true,
    yourself: true,
  },
]

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-accent mx-auto" />
  if (value === false) return <X className="w-5 h-5 text-destructive/60 mx-auto" />
  return <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
}

export function ComparisonTable() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          How we compare
        </h2>

        <div className="rounded-[2rem] bg-secondary overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {columns.map((col, i) => (
                    <th
                      key={col}
                      className={`px-6 py-5 font-heading font-semibold text-primary ${
                        i === 0 ? "text-left" : "text-center"
                      } ${i === 1 ? "bg-accent/10" : ""}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={row.feature}
                    className={rowIndex < rows.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                    <td className="px-6 py-4 bg-accent/10">
                      <CellIcon value={row.us} />
                    </td>
                    <td className="px-6 py-4">
                      <CellIcon value={row.inhouse} />
                    </td>
                    <td className="px-6 py-4">
                      <CellIcon value={row.agencies} />
                    </td>
                    <td className="px-6 py-4">
                      <CellIcon value={row.yourself} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
