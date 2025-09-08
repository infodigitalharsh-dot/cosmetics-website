import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      review: "LuxeGlow has completely transformed my skincare routine. The Radiant Glow Foundation is absolutely perfect - it feels like silk and gives me the most natural, luminous finish I've ever achieved.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9997db4?w=150&h=150&fit=crop&crop=face",
      product: "Radiant Glow Foundation",
    },
    {
      id: 2,
      name: "Emily Chen",
      location: "Los Angeles, CA",
      rating: 5,
      review: "I'm obsessed with the Velvet Matte Lipstick collection! The formula is incredibly comfortable and long-lasting. I've received so many compliments since switching to LuxeGlow.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      product: "Velvet Matte Lipstick",
    },
    {
      id: 3,
      name: "Maya Patel",
      location: "Chicago, IL",
      rating: 5,
      review: "The Botanical Serum has been a game-changer for my sensitive skin. I love that it's all-natural yet so effective. My skin has never looked better!",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face",
      product: "Botanical Serum",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "4.9", label: "Average Rating" },
    { number: "100%", label: "Natural Ingredients" },
    { number: "24/7", label: "Customer Support" },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-card rounded-2xl p-6 shadow-md hover:shadow-lg hover-lift">
                <div className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-body text-foreground-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-foreground-medium max-w-2xl mx-auto font-body">
            Real stories from real customers who have transformed their beauty routine with LuxeGlow.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative animate-slide-up">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-product relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="h-16 w-16 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg lg:text-xl text-foreground font-body leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].review}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-1">
                    <div className="font-heading font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-foreground-medium font-body">
                      {testimonials[currentTestimonial].location}
                    </div>
                    <div className="text-sm text-primary font-body">
                      Verified Purchase: {testimonials[currentTestimonial].product}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="bg-background shadow-md hover:shadow-lg rounded-full hover-lift"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="bg-background shadow-md hover:shadow-lg rounded-full hover-lift"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-60 animate-fade-in">
          <div className="text-center">
            <div className="font-body text-sm text-foreground-light">As featured in</div>
            <div className="font-heading font-semibold text-foreground mt-1">Vogue</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-body text-sm text-foreground-light">Winner</div>
            <div className="font-heading font-semibold text-foreground mt-1">Beauty Awards 2024</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-body text-sm text-foreground-light">Certified</div>
            <div className="font-heading font-semibold text-foreground mt-1">Cruelty-Free</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;