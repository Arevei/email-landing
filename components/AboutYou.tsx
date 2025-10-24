const AboutYou = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">You</span> , The Visionary Founder
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p className="text-xl text-center text-foreground font-semibold mb-8">
            Imagine this !
          </p>

          <div className="space-y-4 text-center">
            <p className="text-foreground">You're not chasing leads anymore.</p>
            <p className="text-foreground">
              You're watching your inbox fill with warm, ready to talk prospects.
            </p>
            <p className="text-foreground">
              Your revenue graph? Rising without burning through ad budgets.
            </p>
          </div>

          <p className="text-xl text-center font-semibold text-foreground pt-8">
            That's the power of Cold Email done right, with the right people behind it.
          </p>

          <div className="bg-card border border-border rounded-xl p-8 my-12">
            <p className="text-center text-muted-foreground mb-6">
              Even the world's top performing companies Like{" "}
              <span className="text-foreground font-semibold">HubSpot, Lemlist, Apollo etc</span>  rely on it.
            </p>
            <p className="text-center text-xl text-foreground font-semibold">
              Because they know one truth
            </p>
            <p className="text-center text-2xl gradient-text font-bold mt-4">
              Trust drives transactions.
            </p>
          </div>

          <p className="text-xl text-center text-foreground font-semibold pt-8">
            You're not average. You're a builder
            <span className="gradient-text">, ready to grow smarter, not harder.</span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  );
};

export default AboutYou;
