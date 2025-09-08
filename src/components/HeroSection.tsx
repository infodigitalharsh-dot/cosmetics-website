import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury cosmetics hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <span className="text-sm font-body text-foreground-medium">
              ✨ Discover Your Natural Glow
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            <span className="block">Luxury</span>
            <span className="block gradient-text">Beauty</span>
            <span className="block">Redefined</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-foreground-medium max-w-2xl mb-8 font-body leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Experience the perfect blend of nature and innovation with our premium cosmetics collection. Crafted for the modern woman who values both elegance and sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg hover-lift hover-glow group"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground-light text-foreground hover:bg-foreground hover:text-background font-heading font-semibold px-8 py-4 rounded-lg hover-lift group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Story
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