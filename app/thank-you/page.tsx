"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    // ✅ Fire conversion events when page loads

    // Google Analytics 4 Conversion Event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "G-BPC4B4QPPZ", // 🔹 Replace with your GA4 MEASUREMENT ID
        utm_source: localStorage.getItem("utm_source"),
        utm_medium: localStorage.getItem("utm_medium"),
        utm_campaign: localStorage.getItem("utm_campaign"),
      })
    }

    // Meta Pixel Lead Event
    // if (typeof window !== "undefined" && window.fbq) {
    //   window.fbq("track", "Lead", {
    //     source: localStorage.getItem("utm_source"),
    //     medium: localStorage.getItem("utm_medium"),
    //     campaign: localStorage.getItem("utm_campaign"),
    //   })
    // }

    // ⏳ Redirect to homepage after 5 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Thank You! 🎉</h1>
      <p className="text-lg text-muted-foreground">
        Your guide is on its way. You’ll be redirected to our homepage shortly.
      </p>
    </section>
  )
}
