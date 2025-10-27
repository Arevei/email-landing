"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2, Star } from "lucide-react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const OrderForm = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    revenue: "",
    transactionalConsent: false,
    marketingConsent: false,
  })
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      
      toast.error("Please fill in all required fields.") 
      return
    }

    if (!formData.businessType || !formData.revenue) {
      toast.error("Please select business type and revenue range.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "order",
        }),
      })


      if (response.ok) {
        toast.success("Your request has been submitted. We'll be in touch soon!")
        sessionStorage.setItem("formSubmitted", "true");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          businessType: "",
          revenue: "",
          transactionalConsent: false,
          marketingConsent: false,
        })
      router.push("/thank-you");

        
      } else {
        toast.error("Failed to submit form. Please try again.")

      }
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 px-4 relative" id="order-form">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Grab The <span className="gradient-text">Email Mastery Bundle</span> — Plug It In Today.
              </h2>
              <p className="text-lg text-muted-foreground">
                Built by real email marketing experts. Copy, paste, book calls, close deals. If it doesn't help? Full
                refund, keep everything.
              </p>
            </div>

            <Card className="bg-card/30 backdrop-blur border-accent/20 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">
                    First name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                    disabled={loading}
                    className="bg-background/50 border-border/50 mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">
                    Last name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    required
                    disabled={loading}
                    className="bg-background/50 border-border/50 mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    disabled={loading}
                    className="bg-background/50 border-border/50 mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    disabled={loading}
                    className="bg-background/50 border-border/50 mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType" className="text-foreground">
                    What type of business do you run? <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="businessType"
                    placeholder="e.g., SaaS, E-commerce, Agency"
                    value={formData.businessType}
                    onChange={(e) => handleChange("businessType", e.target.value)}
                    disabled={loading}
                    className="bg-background/50 border-border/50 mt-2"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">
                    What's your current monthly revenue? <span className="text-accent">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.revenue}
                    onValueChange={(value) => handleChange("revenue", value)}
                    className="space-y-3 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="0-2k" id="r1" disabled={loading} className=" cursor-pointer"/>
                      <Label htmlFor="r1" className="font-normal cursor-pointer text-muted-foreground">
                        $0 - $2k/m (Just starting out, need all the help I can get)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2k-10k" id="r2" disabled={loading} className=" cursor-pointer" />
                      <Label htmlFor="r2" className="font-normal cursor-pointer text-muted-foreground">
                        $2k - $10k/m (I kinda know what I'm doing)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10k-30k" id="r3" disabled={loading}className=" cursor-pointer" />
                      <Label htmlFor="r3" className="font-normal cursor-pointer text-muted-foreground">
                        $10k - $30k/m (I'm doing alright, but I'd like to do better)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30k+" id="r4" disabled={loading} className=" cursor-pointer"/>
                      <Label htmlFor="r4" className="font-normal cursor-pointer text-muted-foreground">
                        $30k+/m (Ready to take this to the next level)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="transactional"
                      checked={formData.transactionalConsent}
                      onCheckedChange={(checked) => handleChange("transactionalConsent", checked as boolean)}
                      disabled={loading}
                      className=" cursor-pointer"
                    />
                    <Label
                      htmlFor="transactional"
                      className="text-xs text-muted-foreground font-normal leading-relaxed cursor-pointer"
                    >
                      By checking this box, I consent to receive transactional messages related to my account, orders,
                      or services I have requested. These messages may include appointment reminders, order
                      confirmations, and account notifications among others.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) => handleChange("marketingConsent", checked as boolean)}
                      disabled={loading}
                      className=" cursor-pointer"
                    />
                    <Label
                      htmlFor="marketing"
                      className="text-xs text-muted-foreground font-normal leading-relaxed cursor-pointer"
                    >
                      By checking this box, I consent to receive marketing and promotional messages, including special
                      offers, discounts, new product updates among others.
                    </Label>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full text-lg font-bold"
                  disabled={loading}
                >
                  {loading ? "SUBMITTING..." : "GET INSTANT ACCESS"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Right Column - Benefits & Social Proof */}
          <div className="space-y-8 lg:sticky lg:top-8">
            <Card className="bg-card/30 backdrop-blur border-accent/20 p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-foreground font-semibold">4.5/5 star reviews</span>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-foreground">Here's what you get:</h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">Complete Zero Setup Confusion</p>
                    <p className="text-muted-foreground text-sm">
                      From Zero to First Campaign in 24 Hours Everything Included
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">Proven High-ROI Results with Measurable Metrics</p>
                    <p className="text-muted-foreground text-sm">
                     Achieve 10-30% Reply Rates with Scientific Precision
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">Advanced Deliverability Protection</p>
                    <p className="text-muted-foreground text-sm">
                      Scale to 1000s of Emails Without Hitting Spam - Guaranteed
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-semibold">From Lead Generation to Deal Closure</p>
                    <p className="text-muted-foreground text-sm">
                      Not Just Emails. A Complete Revenue Generation System
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-2">
                  Built & battle-tested across{" "}
                  <span className="text-accent font-semibold">50+ six-figure businesses</span>.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-destructive line-through">$2997</span>
                  <span className="text-4xl font-bold gradient-text">Today: $0</span>
                </div>
              </div>
            </Card>

            {/* Testimonial Card */}
            <Card className="bg-card/30 backdrop-blur border-accent/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sadek</p>
                  <p className="text-sm text-muted-foreground">AU • 4 days ago</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-semibold text-foreground mb-2">Next Level Mentorship!</p>
              <p className="text-sm text-muted-foreground">
                Arevei's training & resources are next level. After implementing a few strategies, I started seeing
                better client engagement and more consistent leads. Their posts cut through the noise and give real,
                actionable steps.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderForm
