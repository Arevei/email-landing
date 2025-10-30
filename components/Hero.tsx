"use client";
import React from "react";
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
            className="w-24 md:w-46 h-auto mx-auto "
          />
          
          </div>
        
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turn Cold Emails into 4X ROI Campaigns 
            <br />
            <span className="gradient-text">Predictable Growth Starts Here</span>
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <p className="font-medium">
               Build a proven 3-Month System that converts cold leads into booked meetings or your money back.
            </p>

          </div>

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
        </div>
      </div>
    </section>
  );
};

export default Hero;
