import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google"
import { ToastProvider } from "@/components/ui/toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cold Email That Converts | Build Trust. Book Calls. Grow Fast.",
  description: "Don’t just get clicks get conversations. Learn how trust-driven cold email campaigns deliver 40x ROI, reduce acquisition costs, and help you connect with high-performing decision-makers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` font-poppins ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
        {/* --- Microsoft Clarity Tracking --- */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tu58gre3h0");
          `}
        </Script>

        <ToastProvider>

        {children}
        </ToastProvider>
      </body>
    </html>
  );
}
