import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products-hero.jpg";

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      title: "Face",
      subtitle: "Foundation & Concealer",
      image: productsImage,
      productCount: 24,
      featured: true,
    },
    {
      id: 2,
      title: "Eyes",
      subtitle: "Shadows & Liners",
      image: productsImage,
      productCount: 18,
      featured: false,
    },
    {
      id: 3,
      title: "Lips",
      subtitle: "Lipsticks & Glosses",
      image: productsImage,
      productCount: 32,
      featured: true,
    },
    {
      id: 4,
      title: "Skincare",
      subtitle: "Serums & Moisturizers",
      image: productsImage,
      productCount: 16,
      featured: false,
    },
    {
      id: 5,
      title: "Tools",
      subtitle: "Brushes & Accessories",
      image: productsImage,
      productCount: 12,
      featured: false,
    },
    {
      id: 6,
      title: "Sets",
      subtitle: "Gift & Travel Sets",
      image: productsImage,
      productCount: 8,
      featured: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-foreground-medium max-w-2xl mx-auto font-body">
            Explore our carefully curated collections designed to enhance your natural beauty.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-md hover:shadow-product transition-all duration-500 hover-lift cursor-pointer animate-fade-in
                ${category.featured ? 'md:col-span-1 lg:row-span-2' : ''}
                ${index === 0 ? 'lg:col-span-2' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="relative aspect-square lg:aspect-auto lg:h-full">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-background">
                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-body">
                  {category.productCount} items
                </div>

                {/* Category Info */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-body text-background/80 uppercase tracking-wider">
                    {category.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* Shop Button */}
                <Button
                  variant="premium"
                  size="sm"
                  className="self-start bg-background/20 backdrop-blur-sm border-background/30 text-background hover:bg-background hover:text-foreground group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Shop Now
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg hover-lift"
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;