"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* Subtle gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10 text-center">
        <div className="mx-auto max-w-3xl mb-8">
          {/* <img src="/AR-logo.png" alt="Logo" className="w-20 rounded-full mx-auto"/> */}
          <img
            src="/AR-Wordmark.svg"
            alt="Arevei"
            className="w-20 h-auto mx-auto "
          />
          
          </div>
        
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Next Revenue Leap
            <br />
            <span className="gradient-text">Starts with One Email</span>
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <p className="font-medium">
              If you had the chance to double your revenue, would you take it?
              <br />
              <span className="text-foreground">Of course, you would.</span>
            </p>

            <p>
              But wait — what if you lose?
              <br />
              Don't worry. Even Spiderman had to take a leap before swinging into success.
            </p>

            <p className="text-foreground font-semibold">This is business.</p>
            <p>When you bet right — you don't just win, you multiply.</p>

            <p className="text-xl text-foreground font-semibold mt-8">
              The smartest risk you'll ever take? Investing in trust — through Email Marketing.
            </p>
          </div>

          <div className="pt-8">
            <Button 
              variant="gradient" 
              size="lg" 
              className="text-lg px-12 py-6 h-auto animate-glow"
              onClick={scrollToContact}
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
