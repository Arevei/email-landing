const WhyItMatters = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />

      <div className="container max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Why It <span className="gradient-text">Matters</span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="bg-card border border-border rounded-xl p-8 my-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-5" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
                "For every $1 invested in Email Marketing,
                <br />
                the average return is <span className="gradient-text text-4xl md:text-5xl">$40</span>"
              </p>
              <p className="text-center text-muted-foreground text-sm mt-4">— Market Research Highlights</p>
            </div>
          </div>

          <div className="my-16">
            {/* <h3 className="text-2xl font-bold text-center text-foreground mb-8">How Arevei Compares</h3> */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-bold">Feature/Value</th>
                    <th className="text-center py-4 px-4 text-accent font-bold">Arevei</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Typical Email Agency</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">DIY Cold Outreach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Dedicated Account Manager</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">Yes</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Often No</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">NA</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Response Time</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">2 hours</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">24-72 hours</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Self-managed</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Strategy & Execution</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">Done for you</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Partial/Self-guided</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Fully DIY</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Landing Page Design</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">Included</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Extra/Not Included</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Not Included</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Creative Email Designs</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">Beautiful, custom</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Generic templates</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Basic/self-made</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Guarantee/Refund Policy</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">100-day unconditional</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Rare/Conditional</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">None</td>
                  </tr>
                  <tr className="border-b border-border/50 hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Leads Quality/Intent</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">High-intent, targeted</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Mixed, less filtering</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Variable</td>
                  </tr>
                  <tr className="hover:bg-card/50 transition-colors">
                    <td className="py-4 px-4 text-foreground">Access to Decision-makers</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-accent font-bold">Direct targeting</span>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">List-based/general</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">Time-consuming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-2xl text-center font-semibold text-foreground pt-8">
            💬 Marketing is the fuel of business{" "}
            <span className="gradient-text">but Email Marketing is hydrogen fuel.</span>
          </p>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  )
}

export default WhyItMatters
