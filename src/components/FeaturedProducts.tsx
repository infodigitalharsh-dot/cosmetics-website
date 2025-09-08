import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import productsImage from "@/assets/products-hero.jpg";

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Radiant Glow Foundation",
      brand: "LuxeGlow",
      price: 48.00,
      originalPrice: 65.00,
      rating: 4.8,
      reviewCount: 324,
      image: productsImage,
      colors: ['#F5C2A4', '#E6A873', '#D49C5A', '#C28842'],
      isSale: true,
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      brand: "LuxeGlow",
      price: 24.00,
      rating: 4.9,
      reviewCount: 189,
      image: productsImage,
      colors: ['#C41E3A', '#8B0000', '#FF1493', '#B22222'],
      isNew: true,
    },
    {
      id: 3,
      name: "Luminous Eye Palette",
      brand: "LuxeGlow",
      price: 52.00,
      rating: 4.7,
      reviewCount: 267,
      image: productsImage,
      colors: ['#F5DEB3', '#DDA0DD', '#FFB6C1', '#E6E6FA'],
    },
    {
      id: 4,
      name: "Botanical Serum",
      brand: "LuxeGlow",
      price: 68.00,
      rating: 4.9,
      reviewCount: 412,
      image: productsImage,
      isNew: true,
    },
    {
      id: 5,
      name: "Silk Powder Blush",
      brand: "LuxeGlow",
      price: 32.00,
      rating: 4.6,
      reviewCount: 156,
      image: productsImage,
      colors: ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF1493'],
    },
    {
      id: 6,
      name: "Crystal Highlighter",
      brand: "LuxeGlow",
      price: 38.00,
      originalPrice: 48.00,
      rating: 4.8,
      reviewCount: 298,
      image: productsImage,
      colors: ['#F0F8FF', '#E0E6F8', '#C9D3F0', '#B8C5E8'],
      isSale: true,
    },
  ];

  const productsPerSlide = 4;
  const maxSlide = Math.ceil(products.length / productsPerSlide) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-background-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-foreground-medium max-w-2xl mx-auto font-body">
            Discover our most loved products, carefully curated for their exceptional quality and transformative results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-background shadow-md hover:shadow-lg hover-lift rounded-full w-12 h-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-background shadow-md hover:shadow-lg hover-lift rounded-full w-12 h-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: Math.ceil(products.length / productsPerSlide) }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {products
                    .slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide)
                    .map((product, index) => (
                      <div
                        key={product.id}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ProductCard {...product} />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-background shadow-md hover:shadow-lg rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-background shadow-md hover:shadow-lg rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg hover-lift"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;