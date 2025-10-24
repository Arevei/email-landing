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
export default function Home() {
  return (
  <div className="min-h-screen bg-background relative">
    <Toast />
      <Hero />
      <WhyItMatters />
      <AboutYou />
      <Transformation />
      <TheMeaning />
      <Testimonials />
      <CallToAction />
      <BookACall />
      <Contact />
      <Footer />
    </div>
  );
}
