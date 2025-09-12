import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import heroProduct from "@/assets/hero-product.jpg";
import heroModel from "@/assets/hero-model.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Script Text Background */}
        <div className="absolute right-0 top-1/4 text-9xl font-accent text-primary/10 select-none pointer-events-none">
          Natural
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Brand Badge */}
            <div className="inline-flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary border-2 border-background"></div>
              </div>
              <span className="font-body text-sm text-foreground">32K+ Happy customers</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[0.9] animate-slide-up">
                ILLUMINATE <br />
                YOUR <br />
                <span className="gradient-text">RADIANT <br />BEAUTY!</span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="bg-foreground text-background font-heading font-semibold px-8 py-4 rounded-full hover-lift group text-lg"
                onClick={() => window.location.href = '/products'}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {['Moisturizers', 'Masks', 'Toners', 'Sunscreens', 'Body Care'].map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full border border-border bg-card/50 backdrop-blur-sm text-foreground font-body hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Product Showcase */}
              <div className="absolute top-8 left-8 z-20">
                <div className="relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center shadow-glow">
                    <img 
                      src={heroProduct} 
                      alt="Premium cosmetic product" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Model Image */}
              <div className="relative ml-16 mt-8">
                <img 
                  src={heroModel} 
                  alt="Beautiful model" 
                  className="w-80 h-96 object-cover rounded-3xl shadow-product"
                />
              </div>

              {/* Info Card */}
              <div className="absolute bottom-16 left-4 bg-card/90 backdrop-blur-md rounded-2xl p-6 shadow-lg max-w-xs">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Did you know?</h3>
                <p className="text-foreground-medium font-body text-sm leading-relaxed">
                  Natural ingredients like aloe vera and vitamin E in skincare products help nourish.
                </p>
              </div>

              {/* Community Badge */}
              <div className="absolute bottom-4 right-4 bg-foreground text-background rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="h-5 w-5" />
                  <span className="font-heading text-sm font-semibold">Join the Community of</span>
                </div>
                <p className="font-heading text-sm font-bold">Beauty Enthusiasts</p>
                <div className="flex -space-x-2 mt-3">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-background"></div>
                  <div className="w-8 h-8 rounded-full bg-primary-glow border-2 border-background flex items-center justify-center text-xs font-bold text-foreground">
                    32K+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;