const Footer = () => {
  return (
    <footer className="relative py-12 px-4 mt-20">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-primary opacity-30" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold gradient-text">Arevei</h3>
          </div>

          {/* Footer text */}
          <p className="text-muted-foreground">
            © 2025 Arevei. Crafted with strategy, precision, and trust.
          </p>

          {/* Contact */}
          <div className="pt-4">
            <a 
              href="mailto:contact@arevei.com" 
              className="text-accent hover:text-foreground transition-colors duration-300 font-medium"
            >
              contact@arevei.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
