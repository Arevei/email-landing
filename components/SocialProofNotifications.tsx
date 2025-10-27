"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface Notification {
  id: string
  message: string
  type: "download" | "call" | "viewing" | "joined"
}

const SocialProofNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const sampleNotifications: Notification[] = [
    {
      id: "1",
      message: "Rajesh from Mumbai downloaded the guide 3 minutes ago",
      type: "download",
    },
    {
      id: "2",
      message: "127 people viewing this page right now",
      type: "viewing",
    },
    {
      id: "3",
      message: "Sarah from Bangalore booked a call today",
      type: "call",
    },
    {
      id: "4",
      message: "Join 500+ founders who downloaded our guide",
      type: "joined",
    },
    {
      id: "5",
      message: "Trusted by 1,200+ email subscribers",
      type: "joined",
    },
  ]

  useEffect(() => {
    // Show notifications in sequence
    let currentIndex = 0

    const showNextNotification = () => {
      if (currentIndex < sampleNotifications.length) {
        const notification = sampleNotifications[currentIndex]
        setNotifications((prev) => [...prev, notification])

        // Remove notification after 5 seconds
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== notification.id))
        }, 5000)

        currentIndex++
        setTimeout(showNextNotification, 3000)
      } else {
        currentIndex = 0
        setTimeout(showNextNotification, 2000)
      }
    }

    showNextNotification()
  }, [])

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-card border border-accent/30 rounded-lg p-4 shadow-lg animate-fade-in-up flex items-start justify-between gap-3"
        >
          <div className="flex-1">
            <p className="text-sm text-foreground">{notification.message}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

export default SocialProofNotifications
