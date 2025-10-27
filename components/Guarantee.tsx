"use client"

import { CheckCircle2 } from "lucide-react"

const Guarantee = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />

      <div className="container max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-accent/10 to-blue-500/10 border border-accent/30 rounded-2xl p-12 md:p-16 text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-accent" />
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              100-Day <span className="gradient-text">Money-Back Guarantee</span>
            </h2>

            <p className="text-xl text-foreground font-semibold">
              If we don't book you 10+ qualified calls within 100 days,
              <br />
              full refund. No questions asked.
            </p>
          </div>

          <div className="pt-4 space-y-3 text-muted-foreground">
            <p className="text-lg">We're that confident in our system. Your success is our success.</p>
            <p className="text-sm">
              This guarantee is backed by our proven track record and commitment to delivering results.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  )
}

export default Guarantee
