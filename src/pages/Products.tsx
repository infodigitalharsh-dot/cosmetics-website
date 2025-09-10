import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import foundationImg from "@/assets/foundation.jpg";
import lipstickImg from "@/assets/lipstick.jpg";
import highlighterImg from "@/assets/highlighter.jpg";
import eyeshadowImg from "@/assets/eyeshadow.jpg";
import mascaraImg from "@/assets/mascara.jpg";
import serumImg from "@/assets/serum.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popularity');

  const products = [
    {
      id: 1,
      name: "Radiant Glow Foundation",
      brand: "LuxeGlow",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 127,
      image: foundationImg,
      colors: ["#F4C2A1", "#E8A87C", "#D4926F", "#C17B5C", "#A0623A"]
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      brand: "LuxeGlow",
      price: 45,
      rating: 4.9,
      reviews: 89,
      image: lipstickImg,
      colors: ["#D42C2C", "#B91C1C", "#7F1D1D", "#F472B6", "#EC4899"]
    },
    {
      id: 3,
      name: "Illuminating Highlighter",
      brand: "LuxeGlow", 
      price: 65,
      rating: 4.7,
      reviews: 203,
      image: highlighterImg,
      colors: ["#FDE68A", "#FBBF24", "#F59E0B", "#D97706"]
    },
    {
      id: 4,
      name: "Premium Eyeshadow Palette",
      brand: "LuxeGlow",
      price: 78,
      rating: 4.6,
      reviews: 156,
      image: eyeshadowImg,
      colors: ["#8B4513", "#CD853F", "#DEB887", "#F4A460"]
    },
    {
      id: 5,
      name: "Volumizing Mascara",
      brand: "LuxeGlow",
      price: 35,
      rating: 4.8,
      reviews: 234,
      image: mascaraImg,
      colors: ["#000000", "#4B0000", "#800080"]
    },
    {
      id: 6,
      name: "Hydrating Face Serum",
      brand: "LuxeGlow",
      price: 95,
      rating: 4.9,
      reviews: 189,
      image: serumImg,
      colors: []
    }
    }
  ];
  
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter and search logic
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, priceFilters, categoryFilters);
  };

  const filterProducts = (search: string, priceFilters: string[], categoryFilters: string[]) => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                           product.brand.toLowerCase().includes(search.toLowerCase());
      
      const matchesPrice = priceFilters.length === 0 || priceFilters.some(range => {
        if (range === '$0 - $25') return product.price <= 25;
        if (range === '$25 - $50') return product.price > 25 && product.price <= 50;
        if (range === '$50 - $100') return product.price > 50 && product.price <= 100;
        if (range === '$100+') return product.price > 100;
        return false;
      });

      return matchesSearch && matchesPrice;
    });

    // Sort products
    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            All Products
          </h1>
          <p className="text-foreground-medium font-body max-w-2xl">
            Discover our complete collection of premium cosmetics, carefully crafted to enhance your natural beauty.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading text-lg font-semibold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-body font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$0 - $25</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$25 - $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$50 - $100</span>
                  </label>
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h4 className="font-body font-medium mb-2">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Face</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Lips</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Eyes</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-muted rounded-lg border border-input-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth font-body"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground-light" />
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <span className="text-foreground-medium text-sm">
                  {filteredProducts.length} products found
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviews}
                  image={product.image}
                  colors={product.colors}
                  isSale={!!product.originalPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;