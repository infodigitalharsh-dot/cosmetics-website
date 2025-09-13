import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Sparkles, Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import heroModel from "@/assets/hero-model-new.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Geometric patterns */}
        <div className="absolute right-10 top-1/3 w-2 h-20 bg-primary/20 rotate-45 animate-float" />
        <div className="absolute left-10 bottom-1/4 w-2 h-16 bg-secondary/20 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content - Enhanced Copy */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-elegant border border-primary/10">
              <div className="flex -space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
              </div>
              <span className="font-body text-sm text-foreground font-medium">Trusted by 50K+ Beauty Lovers</span>
            </div>

            {/* Main Headline - Compelling Copy */}
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-[0.9] animate-slide-up">
                YOUR SKIN <br />
                DESERVES <br />
                <span className="gradient-text">LUXURY</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground-medium font-body leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Transform your daily routine with premium, science-backed skincare that delivers visible results. 
                <strong className="text-foreground"> Because beautiful skin isn't a luxury—it's your birthright.</strong>
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-foreground-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-foreground-medium">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground-medium">Natural Ingredients</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-heading font-semibold px-10 py-6 rounded-full hover-lift group text-lg shadow-glow hover:shadow-primary/30 transition-all duration-300"
                onClick={() => navigate('/products')}
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Start Your Glow Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-foreground-medium mt-3 flex items-center">
                <Heart className="h-4 w-4 mr-1 text-red-400 fill-current" />
                Free shipping on orders over $75 • 30-day money-back guarantee
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: "🧪", text: "Clinically Tested" },
                { icon: "🌿", text: "100% Natural" },
                { icon: "🚫", text: "Cruelty-Free" },
                { icon: "♻️", text: "Sustainable" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                  <span className="text-xl">{benefit.icon}</span>
                  <span className="text-sm font-medium text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Enhancement */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Hero Banner Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img 
                  src={heroBanner} 
                  alt="Premium skincare products" 
                  className="w-full h-full object-cover opacity-20"
                />
              </div>

              {/* Main Model Image */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-3xl shadow-product">
                  <img 
                    src={heroModel} 
                    alt="Radiant beauty model showcasing healthy, glowing skin" 
                    className="w-full h-[600px] object-cover"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-8 left-8 bg-background/95 backdrop-blur-md rounded-2xl p-4 shadow-elegant animate-float">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span className="font-heading text-sm font-semibold text-foreground">Glow Up Results</span>
                    </div>
                    <p className="text-xs text-foreground-medium">Visible improvements in just 7 days</p>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-primary text-primary-foreground rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-center">
                      <div className="font-heading text-lg font-bold">98%</div>
                      <div className="text-xs opacity-90">Would Recommend</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-4 bg-accent text-accent-foreground rounded-full p-3 shadow-elegant animate-pulse">
                    <Heart className="h-6 w-6 fill-current" />
                  </div>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-elegant max-w-xs animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground-medium leading-relaxed mb-3">
                  "My skin has never looked better! The results were visible within days."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Sarah M.</p>
                    <p className="text-xs text-foreground-light">Verified Customer</p>
                  </div>
                </div>
              </div>

              {/* Floating Reviews */}
              <div className="absolute top-1/3 -left-8 bg-secondary/10 backdrop-blur-sm rounded-full p-2 animate-float" style={{ animationDelay: '2s' }}>
                <Users className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;