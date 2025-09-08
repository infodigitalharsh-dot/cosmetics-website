import { X, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const WishlistDrawer = () => {
  const { 
    isWishlistOpen, 
    setIsWishlistOpen, 
    wishlistItems, 
    wishlistCount,
    removeFromWishlist,
    addToCart
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsWishlistOpen(false)} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-heading font-semibold text-foreground">
              Wishlist ({wishlistCount})
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsWishlistOpen(false)}
              className="hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Heart className="h-16 w-16 text-foreground-light mb-4" />
                <h3 className="text-lg font-heading font-medium text-foreground mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-foreground-medium font-body mb-6">
                  Save items you love for later by clicking the heart icon.
                </p>
                <Button onClick={() => setIsWishlistOpen(false)}>
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border group">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-body text-foreground-light uppercase tracking-wider mb-1">
                        {item.brand}
                      </p>
                      <h4 className="font-heading text-sm font-medium text-foreground mb-2 line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-sm font-heading font-semibold text-foreground">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingBag className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <Button 
                className="w-full hover-lift" 
                size="lg"
                onClick={() => {
                  wishlistItems.forEach(item => handleAddToCart(item));
                  setIsWishlistOpen(false);
                }}
              >
                Add All to Cart
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsWishlistOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;