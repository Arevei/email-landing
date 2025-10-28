import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import AboutYou from "@/components/AboutYou";
import Transformation from "@/components/Transformation";
import TheMeaning from "@/components/TheMeaning";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import BookACall from "@/components/BookACall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toast } from "@/components/ui/toast";
import WhyColdEmail from "@/components/WhyColdEmail"
import Guarantee from "@/components/Guarantee"
import SocialProofNotifications from "@/components/SocialProofNotifications"
import FounderStory from "@/components/FounderStory";
export default function Home() {
  return (
  <div className="min-h-screen bg-background relative">
    <Toast />
      <Hero />
      <FounderStory />
      {/* <SocialProofNotifications /> */}
      <WhyItMatters />
      <AboutYou />
      <Transformation />
      <TheMeaning />
      <WhyColdEmail />
      <Guarantee />
      <Testimonials />
      <CallToAction />
      <BookACall />
      <Contact />
      <Footer />
    </div>
  );
}
