import { Check } from "lucide-react";

const benefits = [
  "Engagement skyrockets — real replies from real people.",
  "Acquisition costs drop — more profit, less pressure.",
  "A new sales channel unlocks — independent of Meta or Google.",
  "Unlimited reach — without budget inflation.",
  "Zero spam. Zero junk. Only qualified, high-intent leads.",
  "CXO level connections — because decision-makers read emails, not DMs.",
];

const Transformation = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="gradient-text">Transformation</span>
        </h2>

        <p className="text-xl text-center text-foreground font-semibold mb-12">
          We turn Cold Emails into predictable revenue.
        </p>

        <div className="grid gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <Check className="w-4 h-4 text-background" />
                </div>
              </div>
              <p className="text-lg text-foreground">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 space-y-4">
          <p className="text-xl text-muted-foreground">
            Cold Email isn't "outbound"
          </p>
          <p className="text-2xl font-bold gradient-text">
            It's the new inbound.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  );
};

export default Transformation;
