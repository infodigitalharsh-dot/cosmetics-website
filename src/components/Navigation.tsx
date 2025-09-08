import { useState } from "react";
import { ShoppingBag, Heart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-brand text-foreground">
              <span className="gradient-text">LuxeGlow</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-body text-foreground-medium hover:text-foreground transition-smooth">
              Products
            </a>
            <a href="#collections" className="font-body text-foreground-medium hover:text-foreground transition-smooth">
              Collections
            </a>
            <a href="#about" className="font-body text-foreground-medium hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#beauty-tips" className="font-body text-foreground-medium hover:text-foreground transition-smooth">
              Beauty Tips
            </a>
            <a href="#contact" className="font-body text-foreground-medium hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="hover:bg-muted hover-scale relative"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale relative"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden hover:bg-muted hover-scale"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-3 bg-muted rounded-lg border border-input-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth font-body"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground-light" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-background-cream rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#products" 
                className="font-body text-foreground-medium hover:text-foreground transition-smooth py-2"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a 
                href="#collections" 
                className="font-body text-foreground-medium hover:text-foreground transition-smooth py-2"
                onClick={toggleMenu}
              >
                Collections
              </a>
              <a 
                href="#about" 
                className="font-body text-foreground-medium hover:text-foreground transition-smooth py-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#beauty-tips" 
                className="font-body text-foreground-medium hover:text-foreground transition-smooth py-2"
                onClick={toggleMenu}
              >
                Beauty Tips
              </a>
              <a 
                href="#contact" 
                className="font-body text-foreground-medium hover:text-foreground transition-smooth py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;