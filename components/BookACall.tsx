import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const BookACall = () => {
  return (
    <section className="py-20 px-4 relative" id="book-call">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Your{" "}
            <span className="gradient-text">Cold Email Masterpiece</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You've seen what's possible now let's design your roadmap to revenue growth.
          </p>
          
          <p className="text-lg text-muted-foreground">
            📅 Pick a slot that works for you below, it syncs instantly with your Google Calendar.
          </p>
          
          <p className="text-lg italic text-foreground/80 pt-4">
            "One conversation can change the direction of your business"
          </p>
        </div>

        <Card className="bg-card/30 backdrop-blur border-accent/20 shadow-glow overflow-hidden mt-12">
          <div className="p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Schedule Your Free Strategy Call</h3>
            </div>
            
            {/* Calendly Embed - Replace with actual Calendly URL */}
            <div className="relative w-full bg-background/50 rounded-lg border border-border/50  min-h-[500px] sm:min-h-[750px]" >
             <div className="calendly-inline-widget h-[500px] sm:h-[800px]" data-url="https://calendly.com/vinay-arevei/30min?hide_event_type_details=1" style={{minWidth:"320px"}}></div>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>No spam. No pressure. Just strategy, clarity, and results.</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BookACall;
