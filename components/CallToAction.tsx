"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative" id="cta">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-4xl mx-auto space-y-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          I'm Just One Call Away From Your{" "}
          <span className="gradient-text">Next Big Growth Story</span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's talk about your masterpiece — your business —
          <br />
          and design your Road to Email Success.
        </p>

        <div className="pt-8">
          <Button 
            variant="gradient" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto animate-glow"
            onClick={scrollToContact}
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Alternative CTA */}
        <div className="pt-16 space-y-6">
          <div className="w-24 h-px bg-gradient-primary mx-auto opacity-50" />
          
          <h3 className="text-2xl font-bold text-foreground">
            💡 Not Ready Yet?
          </h3>
          
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>No worries.</p>
            <p>Learn the craft, master the system.</p>
            <p className="text-foreground font-semibold">
              Download our free guide:
            </p>
            <p className="text-xl gradient-text font-semibold">
              "Self-Learn Email Execution — From Scratch to Scale."
            </p>
            <p className="text-sm">
              It'll take a few months of practice,
              <br />
              but once you get it — you'll soar. 🚀
            </p>
          </div>

          <div className="pt-6">
            <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/50 hover:bg-accent/10 hover:border-accent"
            >
              <Download className="mr-2" />
              Download Free Guide
            </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  );
};

export default CallToAction;
