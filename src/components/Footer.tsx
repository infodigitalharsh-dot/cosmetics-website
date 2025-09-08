import { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-background/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Stay in the <span className="text-primary">Glow</span>
            </h3>
            <p className="text-background/80 font-body mb-8">
              Subscribe to our newsletter for exclusive beauty tips, product launches, and special offers.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:border-primary"
                required
              />
              <Button 
                type="submit" 
                variant="hero"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h4 className="font-brand text-2xl font-bold mb-6">
                <span className="text-primary">LuxeGlow</span>
              </h4>
              <p className="text-background/80 font-body mb-6 leading-relaxed">
                Discover your natural glow with our premium cosmetics collection. Crafted with love, designed for confidence.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-heading font-semibold text-background mb-6">Quick Links</h5>
              <ul className="space-y-3 font-body text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ingredients</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h5 className="font-heading font-semibold text-background mb-6">Customer Care</h5>
              <ul className="space-y-3 font-body text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Track Your Order</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h5 className="font-heading font-semibold text-background mb-6">Get in Touch</h5>
              <div className="space-y-4 font-body text-background/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p>123 Beauty Lane</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <p>hello@luxeglow.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-background/60 font-body text-sm">
              © 2024 LuxeGlow. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-background/60 font-body text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-2 text-background/60 text-sm">
              <span>We accept:</span>
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
              <span>💳 PayPal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-glow z-50 animate-bounce"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
};

export default Footer;