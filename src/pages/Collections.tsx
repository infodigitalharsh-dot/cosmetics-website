import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Summer Glow",
      description: "Light, radiant shades perfect for the warm season",
      image: "/placeholder.svg",
      products: 12,
      featured: true
    },
    {
      id: 2,
      name: "Evening Elegance",
      description: "Bold, sophisticated colors for special occasions",
      image: "/placeholder.svg",
      products: 8,
      featured: false
    },
    {
      id: 3,
      name: "Natural Beauty",
      description: "Subtle, everyday essentials for effortless beauty",
      image: "/placeholder.svg",
      products: 15,
      featured: true
    },
    {
      id: 4,
      name: "Vintage Glamour",
      description: "Classic looks inspired by timeless beauty icons",
      image: "/placeholder.svg",
      products: 10,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Collections</span>
          </h1>
          <p className="text-xl text-foreground-medium max-w-3xl mx-auto font-body">
            Curated beauty collections designed to complement every style, occasion, and mood. 
            From everyday essentials to statement looks.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Featured Collections */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {collections.filter(collection => collection.featured).map((collection) => (
              <div key={collection.id} className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-glow transition-all duration-300">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-foreground-medium mb-4 font-body">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground-light">
                        {collection.products} products
                      </span>
                      <Button className="hover-lift">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Collections Grid */}
        <section>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            All Collections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-foreground-medium text-sm font-body mb-2">
                  {collection.description}
                </p>
                <span className="text-xs text-foreground-light">
                  {collection.products} products
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 mt-16 bg-gradient-card rounded-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-foreground-medium font-body mb-8 max-w-2xl mx-auto">
            Our beauty consultants are here to help you find the perfect products for your unique style and needs.
          </p>
          <Button size="lg" className="hover-lift hover-glow">
            Get Personal Consultation
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;