import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();
  
  // Create category data from actual product categories and get sample images
  const categoryImages = {
    "Skincare": products.find(p => p.category === "Skincare")?.image || "",
    "Makeup": products.find(p => p.category === "Makeup")?.image || "",
    "Body Care": products.find(p => p.category === "Body Care")?.image || "",
    "Lip Care": products.find(p => p.category === "Lip Care")?.image || "",
  };

  const categoryData = [
    {
      id: 1,
      title: "Skincare",
      subtitle: "Serums & Moisturizers",
      image: categoryImages["Skincare"],
      productCount: products.filter(p => p.category === "Skincare").length,
    },
    {
      id: 2,
      title: "Makeup",
      subtitle: "Foundation & Colors",
      image: categoryImages["Makeup"],
      productCount: products.filter(p => p.category === "Makeup").length,
    },
    {
      id: 3,
      title: "Body Care",
      subtitle: "Lotions & Treatments",
      image: categoryImages["Body Care"],
      productCount: products.filter(p => p.category === "Body Care").length,
    },
    {
      id: 4,
      title: "Lip Care",
      subtitle: "Balms & Treatments",
      image: categoryImages["Lip Care"],
      productCount: products.filter(p => p.category === "Lip Care").length,
    },
  ].filter(category => category.productCount > 0); // Only show categories with products

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

        {/* Category Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
          {categoryData.map((category, index) => (
            <div
              key={category.id}
              className={`
                group relative overflow-hidden rounded-2xl shadow-md hover:shadow-product transition-all duration-500 hover-lift cursor-pointer animate-fade-in
                ${index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}
                ${index === 1 ? 'lg:row-span-1' : ''}
                ${index === 2 ? 'lg:row-span-1' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/products?category=${category.title}`)}
            >
              {/* Background Image */}
              <div className={`relative ${index === 0 ? 'aspect-[2/1] lg:aspect-auto lg:h-full' : 'aspect-square'}`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 text-background">
                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-body">
                  {category.productCount} items
                </div>

                {/* Category Info */}
                <div className="space-y-1 lg:space-y-2 mb-3 lg:mb-4">
                  <p className="text-xs lg:text-sm font-body text-background/80 uppercase tracking-wider">
                    {category.subtitle}
                  </p>
                  <h3 className="font-heading text-xl lg:text-2xl xl:text-3xl font-bold">
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
            onClick={() => navigate("/products")}
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