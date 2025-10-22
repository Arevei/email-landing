"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Strategy Call Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:contact@arevei.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening your email client...",
      description: "We'll get back to you within 24 hours!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill in your details and let's start your growth journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Your Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-foreground">
              Company Name
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={handleChange}
              className="bg-background border-border focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Tell us about your goals *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="What are you looking to achieve with email marketing?"
              value={formData.message}
              onChange={handleChange}
              className="bg-background border-border focus:border-accent min-h-32"
            />
          </div>

          <Button 
            type="submit" 
            variant="gradient" 
            size="lg" 
            className="w-full animate-glow"
          >
            <Send className="mr-2" />
            Send Message
          </Button>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Or email us directly at{" "}
              <a 
                href="mailto:contact@arevei.com" 
                className="text-accent hover:underline font-medium"
              >
                vinay@arevei.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
