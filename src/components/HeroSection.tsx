import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury cosmetics hero"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Customer Testimonials */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6 animate-fade-in">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-secondary border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-accent border-2 border-background"></div>
            </div>
            <span className="font-body font-medium text-foreground">32K+ Happy customers</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Let your skin shine with <br />
            <span className="gradient-text">strength & beauty</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-foreground-medium max-w-2xl mb-8 font-body leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A skincare routine is just the beginning. Experience beauty artistry that enhances your natural glow and boosts your confidence.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-hover text-white font-heading font-semibold px-8 py-4 rounded-full hover-lift hover-glow group"
              onClick={() => window.location.href = '/products'}
            >
              Book an appointment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start space-x-8 text-foreground-light animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm font-body">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-foreground">4.9★</div>
              <div className="text-sm font-body">Customer Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm font-body">Natural</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground-light rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;