import { useState } from "react";
import { ShoppingBag, Heart, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { cartCount, wishlistCount, setIsCartOpen, setIsWishlistOpen } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border-light">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-brand text-foreground hover:opacity-80 transition-opacity">
              <span className="gradient-text">LuxeGlow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className={`font-body hover:text-foreground transition-smooth ${
                isActive('/products') ? 'text-foreground font-medium' : 'text-foreground-medium'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/collections" 
              className={`font-body hover:text-foreground transition-smooth ${
                isActive('/collections') ? 'text-foreground font-medium' : 'text-foreground-medium'
              }`}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={`font-body hover:text-foreground transition-smooth ${
                isActive('/about') ? 'text-foreground font-medium' : 'text-foreground-medium'
              }`}
            >
              About
            </Link>
            <Link 
              to="/beauty-tips" 
              className={`font-body hover:text-foreground transition-smooth ${
                isActive('/beauty-tips') ? 'text-foreground font-medium' : 'text-foreground-medium'
              }`}
            >
              Beauty Tips
            </Link>
            <Link 
              to="/contact" 
              className={`font-body hover:text-foreground transition-smooth ${
                isActive('/contact') ? 'text-foreground font-medium' : 'text-foreground-medium'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="hover:bg-muted hover-scale relative"
              aria-label="Search products"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale"
              aria-label="User account"
            >
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale relative"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs font-medium">
                  {wishlistCount > 99 ? '99+' : wishlistCount}
                </span>
              )}
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-muted hover-scale relative"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart (${cartCount} items)`}
            >
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs font-medium">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden hover:bg-muted hover-scale"
              aria-label="Toggle navigation menu"
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
              <Link 
                to="/products" 
                className={`font-body hover:text-foreground transition-smooth py-2 ${
                  isActive('/products') ? 'text-foreground font-medium' : 'text-foreground-medium'
                }`}
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link 
                to="/collections" 
                className={`font-body hover:text-foreground transition-smooth py-2 ${
                  isActive('/collections') ? 'text-foreground font-medium' : 'text-foreground-medium'
                }`}
                onClick={toggleMenu}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className={`font-body hover:text-foreground transition-smooth py-2 ${
                  isActive('/about') ? 'text-foreground font-medium' : 'text-foreground-medium'
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/beauty-tips" 
                className={`font-body hover:text-foreground transition-smooth py-2 ${
                  isActive('/beauty-tips') ? 'text-foreground font-medium' : 'text-foreground-medium'
                }`}
                onClick={toggleMenu}
              >
                Beauty Tips
              </Link>
              <Link 
                to="/contact" 
                className={`font-body hover:text-foreground transition-smooth py-2 ${
                  isActive('/contact') ? 'text-foreground font-medium' : 'text-foreground-medium'
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;