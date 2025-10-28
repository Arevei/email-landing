"use client"

import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FounderStory() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
           
            <span className="gradient-text">👤 Meet the Founder</span>
          </h2>
        <div className=" flex flex-col-reverse md:grid  grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
            
            {/* Right: Content */}
          <div className="space-y-8">
         <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-2"></p>

            <div className="space-y-6 text-foreground/90 leading-relaxed ">
              <p>
                Hi, I'm Vinay, the founder of Arevei. I started Arevei to help brands generate predictable, high-quality
                leads and authentic brand storytelling.
              </p>

              <p>
                Cold Email Marketing changed everything for us. What began as an experiment turned into a proven system
                that helps businesses get genuine conversations and conversions.
              </p>

              <p>Since 2024, we've been helping brands grow through authentic outreach and smart storytelling.</p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-secondary">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">12.5M+</p>
                <p className="text-sm text-muted-foreground mt-1">Total Reach</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">10,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Qualified Leads</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">₹50L+</p>
                <p className="text-sm text-muted-foreground mt-1">Revenue Generated</p>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-secondary/50 border border-accent/30 rounded-xl p-6 mt-8">
              <p className="text-foreground font-semibold mb-2">Our Guarantee</p>
              <p className="text-sm text-foreground/80">
                If we don't deliver 10+ qualified bookings in 100 days, you get a full refund. No questions asked.
              </p>
            </div>

            {/* CTA */}
            <p className="text-lg font-semibold text-foreground pt-4">
              Let's turn your outreach into real conversations and real revenue.
            </p>
          </div>
          {/* Left: Image */}
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-start">
            <div className="relative w-full max-w-md space-y-2.5">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl"></div>

              
              <Image
                src="/vinay.jpg"
                alt="Vinay Shakyawar, Founder of Arevei"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
                priority
              />
                 <div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Vinay Shakyawar</h2>
              <p className="text-lg text-muted-foreground">Founder of Arevei</p>
              <Link
      href="https://www.linkedin.com/in/vinaykumarshakyawar/"
      target="_blank"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent mt-2 hover:bg-blue-700 transition-colors cursor-pointer"
      
    >
        <button>
      <Linkedin className="w-5 h-5 text-white" />
      </button>
    </Link>
            </div>
            </div>
            
          </div>

          
        </div>
      </div>
    </section>
  )
}
