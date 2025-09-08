import { Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  colors = [],
  isNew = false,
  isSale = false,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? 'fill-primary text-primary'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div
      className="group relative bg-card rounded-lg shadow-sm hover:shadow-product transition-all duration-300 overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {(isNew || isSale) && (
        <div className="absolute top-3 left-3 z-10">
          {isNew && (
            <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-body font-medium">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-body font-medium ml-2">
              Sale
            </span>
          )}
        </div>
      )}

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleWishlist}
        className={`absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            isWishlisted ? 'fill-primary text-primary' : 'text-foreground-medium'
          }`}
        />
      </Button>

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-card aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Overlay */}
        <div
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button variant="default" className="animate-scale-in">
            Quick View
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Brand & Name */}
        <div>
          <p className="text-xs font-body text-foreground-light uppercase tracking-wider">
            {brand}
          </p>
          <h3 className="font-heading text-sm text-foreground mt-1 line-clamp-2">
            {name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            {renderStars(rating)}
          </div>
          <span className="text-xs text-foreground-light font-body">
            ({reviewCount})
          </span>
        </div>

        {/* Colors */}
        {colors.length > 0 && (
          <div className="flex space-x-2">
            {colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-border-light hover-scale cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 4 && (
              <span className="text-xs text-foreground-light font-body">
                +{colors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-heading font-semibold text-foreground">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-foreground-light line-through font-body">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-primary hover:text-primary-foreground hover-scale"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;