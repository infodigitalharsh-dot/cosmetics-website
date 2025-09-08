import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Leaf } from "lucide-react";
import brandStoryImage from "@/assets/brand-story.jpg";

const BrandStory = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-product">
              <img
                src={brandStoryImage}
                alt="Our brand story"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-lg animate-float">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-1">10+ Years</div>
                <div className="text-sm font-body text-foreground-medium">of Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-background rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-body font-semibold text-foreground">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Heart className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-body text-foreground-medium">Our Story</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Crafting Beauty with 
              <span className="gradient-text"> Purpose</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-foreground-medium mb-8 font-body leading-relaxed">
              Born from a passion for natural beauty and sustainable luxury, LuxeGlow represents the perfect harmony between efficacy and ethics. Our journey began with a simple belief: that everyone deserves to feel confident in their own skin.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-2 mt-1">
                  <Leaf className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    100% Natural Ingredients
                  </h4>
                  <p className="text-foreground-medium font-body">
                    Sourced ethically from nature's finest botanicals and minerals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-full p-2 mt-1">
                  <Sparkles className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    Science-Backed Formulas
                  </h4>
                  <p className="text-foreground-medium font-body">
                    Every product is developed with cutting-edge research and rigorous testing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-full p-2 mt-1">
                  <Heart className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    Cruelty-Free Promise
                  </h4>
                  <p className="text-foreground-medium font-body">
                    Never tested on animals, always tested on results.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="hover-lift hover-glow"
              >
                Learn Our Story
              </Button>
              <Button 
                variant="elegant" 
                size="lg"
                className="hover-lift"
              >
                Meet Our Founder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;