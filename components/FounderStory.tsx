"use client"

import { Linkedin, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function FounderStory() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
           
            <span className="gradient-text">👤 Meet the Founder</span>
          </h2>
        <div className=" flex flex-col-reverse  md:flex-row gap-12 justify-between items-center mt-10">
            
            {/* Right: Content */}
          <div className="space-y-8 w-full md:w-[60%]">
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
          <div className="ml-0 md:ml-auto flex flex-col-reverse md:flex-row justify-center items-center md:justify-start w-full md:w-[40%]">
            <div className="relative w-full max-w-md flex flex-col  items-center md:items-start ">
              

              <div className=" text-center md:text-left">
              
              <Image
                src="/founder.png"
                alt="Vinay Shakyawar, Founder of Arevei"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-96 md:w-[90%] "
                priority
              />
                 <div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground my-3">Vinay Kumar  Shakyawar</h2>
              <p className="text-lg text-muted-foreground">Founder and CEO , Arevei</p>
              <div className=" w-fit mt-2 mx-auto md:mx-0">
              <Link
      href="https://www.linkedin.com/in/vinaykumarshakyawar/" // replace with your LinkedIn URL
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#0077B5] text-white rounded-md px-5 py-2 hover:bg-[#005983] transition-all shadow-md"
    >
      <span className="text-sm sm:text-base whitespace-nowrap ">
        View my profile on
      </span>
      <div className="flex items-center text-white bg-transparent  rounded">
        <span className=" font-bold text-xl mr-1">Linked</span>
       <span className="flex items-center justify-center w-8 h-8">
        <svg
          height="28px"
          width="28px"
          viewBox="0 0 382 382"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          className="fill-white  transition-colors"
        >
          <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
          C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844
          c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403
          c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432
          c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666
          S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
          c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
          c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426
          c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
          c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912
          c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z" />
        </svg>
      </span>
      </div>
    </Link>
      </div>
    </div>
            </div>
            </div>
            
          </div>

          
        </div>
      </div>
    </section>
  )
}
