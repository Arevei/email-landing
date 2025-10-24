const TheMeaning = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          The <span className="gradient-text">Meaning</span>: Why It's Bigger Than Marketing
        </h2>

        <div className="space-y-8 text-lg text-muted-foreground">
          <p className="text-2xl text-center text-foreground font-semibold">
            High performing businesses attract high performing people.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <p className="text-center text-xl text-foreground">
              The top 1% don't waste time scrolling.
            </p>
            <p className="text-center text-xl text-foreground">
              They live in their inbox, where decisions are made, partnerships are born,{" "}
              <span className="gradient-text font-semibold">and empires grow.</span>
            </p>
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-2xl text-foreground font-semibold">
              That's where you belong
            </p>
            <p className="text-2xl text-foreground font-semibold">
              and that's where <span className="gradient-text">we'll take you.</span>
            </p>
          </div>

          <div className="pt-8 space-y-6 text-center">
            <p className="text-xl text-foreground">
              We don't just send emails.
            </p>
            <p className="text-xl text-foreground font-semibold">
              We start relationships that grow businesses.
            </p>
          </div>

          <div className="bg-gradient-glow/10 border border-accent/30 rounded-xl p-8 mt-12">
            <p className="text-2xl text-center font-bold text-foreground mb-4">
              Our goal?
            </p>
            <p className="text-xl text-center gradient-text font-semibold">
              Help you reach the top 1% and become one of them.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  );
};

export default TheMeaning;
