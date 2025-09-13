import React, { useState, useMemo, useEffect } from "react";
import { Search, Filter, X, Grid3X3, List, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { products, categories, brands, priceRanges, sortOptions, type Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { addToCart, addToWishlist, wishlistItems } = useCart();
  const navigate = useNavigate();

  const productsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Category filter
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
      
      // Brand filter
      const matchesBrand = selectedBrand === "All Brands" || product.brand === selectedBrand;
      
      // Price filter
      const priceRange = priceRanges.find(range => range.label === selectedPriceRange);
      const matchesPrice = !priceRange || (product.price >= priceRange.min && product.price <= priceRange.max);
      
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, selectedPriceRange, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + productsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Products");
    setSelectedBrand("All Brands");
    setSelectedPriceRange("All Prices");
    setSortBy("featured");
    setCurrentPage(1);
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-semibold text-foreground">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-foreground-medium">
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h4 className="font-heading font-medium text-foreground">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`}
                checked={selectedCategory === category}
                onCheckedChange={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              />
              <label
                htmlFor={`category-${category}`}
                className="text-sm font-body text-foreground-medium cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <h4 className="font-heading font-medium text-foreground">Brand</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox 
                id={`brand-${brand}`}
                checked={selectedBrand === brand}
                onCheckedChange={() => {
                  setSelectedBrand(brand);
                  setCurrentPage(1);
                }}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm font-body text-foreground-medium cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="font-heading font-medium text-foreground">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.label} className="flex items-center space-x-2">
              <Checkbox 
                id={`price-${range.label}`}
                checked={selectedPriceRange === range.label}
                onCheckedChange={() => {
                  setSelectedPriceRange(range.label);
                  setCurrentPage(1);
                }}
              />
              <label
                htmlFor={`price-${range.label}`}
                className="text-sm font-body text-foreground-medium cursor-pointer"
              >
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }: { product: Product }) => (
    <Card 
      className="group bg-card hover:shadow-product transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNew && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
              New
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
              Best Seller
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
            >
              <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
            </Button>
            <Button
              size="sm"
              className="h-8 w-8 p-0"
              disabled={!product.inStock}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-body text-foreground-medium uppercase tracking-wider">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-current text-yellow-400" />
              <span className="text-xs font-body text-foreground-medium">
                {product.rating} ({product.reviewCount})
              </span>
            </div>
          </div>
          
          <h3 className="font-heading font-semibold text-foreground line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm font-body text-foreground-medium line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <span className="font-heading font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm font-body text-foreground-light line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="gradient-text">Premium Collection</span>
            </h1>
            <p className="text-lg font-body text-foreground-medium max-w-2xl mx-auto">
              Discover luxury skincare and makeup products crafted with the finest ingredients for your beauty routine.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:w-64 shrink-0">
            <div className="sticky top-8">
              <FilterSection />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="mb-8 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground-light" />
                <Input
                  type="text"
                  placeholder="Search products, brands, or ingredients..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 pr-4 py-3 font-body"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Controls Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Sheet open={showFilters} onOpenChange={setShowFilters}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80">
                      <SheetHeader>
                        <SheetTitle>Filter Products</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterSection />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  {/* View Mode */}
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-r-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-l-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Results Count */}
                  <span className="text-sm font-body text-foreground-medium">
                    {filteredAndSortedProducts.length} products
                  </span>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(searchQuery || selectedCategory !== "All Products" || selectedBrand !== "All Brands" || selectedPriceRange !== "All Prices") && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm font-body text-foreground-medium">Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchQuery}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                  </Badge>
                )}
                {selectedCategory !== "All Products" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {selectedCategory}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("All Products")} />
                  </Badge>
                )}
                {selectedBrand !== "All Brands" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {selectedBrand}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedBrand("All Brands")} />
                  </Badge>
                )}
                {selectedPriceRange !== "All Prices" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {selectedPriceRange}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedPriceRange("All Prices")} />
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                  : "grid-cols-1"
              }`}>
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="space-y-4">
                  <div className="text-6xl">🔍</div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    No products found
                  </h3>
                  <p className="font-body text-foreground-medium">
                    Try adjusting your filters or search terms
                  </p>
                  <Button onClick={clearFilters}>
                    Clear all filters
                  </Button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default Products;