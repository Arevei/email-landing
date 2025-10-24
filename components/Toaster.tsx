"use client"
import { ToastProvider } from "@radix-ui/react-toast"
import { Toaster } from "react-hot-toast"

export default function Toasting({ children }: { children: React.ReactNode }) {
  return (
    <>
    <ToastProvider>
        {children}
        <Toaster position="top-right" reverseOrder={false} />
    </ToastProvider>
    </>
      
  )
}
