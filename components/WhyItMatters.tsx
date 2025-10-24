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
          <p className="text-xl text-center text-foreground font-semibold">
            Email Marketing isn't another trend.
            <br />
            It's the most trusted, high ROI channel in digital marketing.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 my-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-5" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
                "For every $1 invested in Email Marketing,
                <br />
                the average return is{" "}
                <span className="gradient-text text-4xl md:text-5xl">$40</span>"
              </p>
              <p className="text-center text-muted-foreground text-sm mt-4">
                — Market Research Highlights
              </p>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <p className="text-xl text-foreground">No algorithms.</p>
            <p className="text-xl text-foreground">No bidding wars.</p>
            <p className="text-xl text-foreground font-semibold">
              Just real conversations with real decision makers who research you before replying.
            </p>
          </div>

          <p className="text-2xl text-center font-semibold text-foreground pt-8">
            💬 Marketing is the fuel of business {" "}
            <span className="gradient-text">but Email Marketing is hydrogen fuel.</span>
          </p>
          <p className="text-center text-lg">
            Clean. Scalable. Explosive.
          </p>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  );
};

export default WhyItMatters;
