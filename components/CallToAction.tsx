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
          We're Just One Call Away From Your {" "}
          <span className="gradient-text">Next Big Growth Story</span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's talk about your masterpiece , your business
          <br />
          and design your Road to Email Success.
        </p>

        <div className="pt-8">
          <button
        onClick={scrollToContact}
        className="
          relative group w-fit rounded-[10px] p-[1px]
          bg-[linear-gradient(90deg,#00ffd9_0%,#00aeff_100%)]
          transition-all duration-500 ease-in-out
          hover:scale-[1.02] cursor-pointer
        "
      >
        <span
          className="
            flex items-center justify-center gap-2
            rounded-[10px] px-8 sm:px-12 py-4 sm:py-5 
            text-base sm:text-lg font-medium
            text-white bg-black
            transition-all duration-500 ease-in-out
            group-hover:bg-[linear-gradient(90deg,#00ffd9_0%,#00aeff_100%)]
            group-hover:text-black
          "
        >
          Book a Free Strategy Call
          <ArrowRight className="w-5 h-5" />
        </span>
      </button>
        </div>

        {/* Alternative CTA */}
        <div className="pt-16 space-y-6">
          <div className="w-24 h-px bg-gradient-primary mx-auto opacity-50" />
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Download the ₹2,997 Cold Email Blueprint   
          <span className="gradient-text"> "Free Now"</span>
        </h2>
          
          <h3 className="text-xl font-bold text-foreground">
            This isn’t some Cold Email PDF, It’s the exact roadmap system that turned total beginners into $10k–$70k/month.

          </h3>
          
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>Even if they were getting ghosted before.</p>
            <p>Learn the craft, Master the system.</p>
            <p className="text-foreground font-semibold">
              Download our free guide:
            </p>
            <p className="text-xl gradient-text font-semibold">
              "Self-Learn Email Execution from Scratch to Scale"
            </p>
            <p className="text-sm">
              It'll take a few months of practice,
              <br />
              but once you get it you'll soar. 🚀
            </p>
          </div>

          <div className="pt-6">
            <Link href="/contact">
            <Button 
               variant="gradient" 
              size="lg" 
              className="text-base sm:text-lg px-5 sm:px-12 py-6 h-auto animate-glow text-wrap w-min "
            >
              <Download className="mr-2 " />
              Download our Free Guide
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
