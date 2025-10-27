"use client"

import Image from "next/image"

const WhyColdEmail = () => {
  const stats = [
    {
      icon: "📊",
      text: (
        <>
          <span className="font-bold text-accent">$42 ROI</span> for every $1 spent (DMA, 2024)
        </>
      ),
    },
    {
      icon: "📊",
      text: (
        <>
          <span className="font-bold text-accent">80%</span> of B2B leads come from email marketing (Content Marketing Institute)
        </>
      ),
    },
    {
      icon: "📊",
      text: (
        <>
          Companies using cold email see <span className="font-bold text-accent">3x higher conversion rates</span> than social media (HubSpot)
        </>
      ),
    },
    {
      icon: "📊",
      text: (
        <>
          CXOs check email <span className="font-bold text-accent">15+ times daily</span> – your message lands where decisions are made
        </>
      ),
    },
  ]

  const publications = [
    { name: "HubSpot", logo: "/hubspot.png" },
    { name: "Lemlist", logo: "/lemilist.jpeg" },
    { name: "Apollo", logo: "/apollo.png" },
    // { name: "Google Workspace", logo: "/google.png" },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />

      <div className="container max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Cold Email <span className="gradient-text">Outperforms Every Other Channel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-backed insights showing why email is the most effective channel for B2B growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-start gap-4 bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 group ">
              <span className="text-2xl">{stat.icon}</span>
              <p className="my-auto">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Publications Section */}
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
              Insights from trusted sources
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300"
              >
                <Image src={pub.logo} alt={pub.name} width={100} height={40} className="object-contain max-h-8 md:max-h-16 bg-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
    </section>
  )
}

export default WhyColdEmail
