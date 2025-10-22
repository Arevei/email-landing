import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "We doubled our booked calls within 45 days. The messaging felt human, not robotic — and it worked.",
    author: "Rohit Mehta",
    title: "Founder @ GrowthWings"
  },
  {
    quote: "Every campaign felt like a conversation. Cold email stopped being cold — it became personal and powerful.",
    author: "Sarah Lin",
    title: "Head of Sales @ SaaSFlow"
  },
  {
    quote: "From 0 to 35 qualified meetings in under 2 months. The system Arevei built just works.",
    author: "Arjun Desai",
    title: "CEO @ BrightTech"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative" id="testimonials">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Trusted by Founders Who Turned{" "}
          <span className="gradient-text">Clicks Into Clients</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="text-6xl text-accent/20 group-hover:text-accent/40 transition-colors leading-none">"</div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-8 pt-12 opacity-30 hover:opacity-50 transition-opacity">
          <div className="text-xs text-muted-foreground">TRUSTED BY</div>
          <div className="h-8 w-px bg-border" />
          <div className="text-sm text-muted-foreground tracking-wider">GrowthWings</div>
          <div className="text-sm text-muted-foreground tracking-wider">SaaSFlow</div>
          <div className="text-sm text-muted-foreground tracking-wider">BrightTech</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
