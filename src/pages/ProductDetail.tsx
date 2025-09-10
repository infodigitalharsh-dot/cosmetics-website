import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Star, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import foundationImg from "@/assets/foundation.jpg";
import lipstickImg from "@/assets/lipstick.jpg";
import highlighterImg from "@/assets/highlighter.jpg";
import eyeshadowImg from "@/assets/eyeshadow.jpg";
import mascaraImg from "@/assets/mascara.jpg";
import serumImg from "@/assets/serum.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data with real images
  const products = {
    "1": {
      id: 1,
      name: "Radiant Glow Foundation",
      brand: "LuxeGlow",
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 127,
      images: [foundationImg, foundationImg, foundationImg],
      colors: ["#F4C2A1", "#E8A87C", "#D4926F", "#C17B5C", "#A0623A"],
      colorNames: ["Fair", "Light", "Medium", "Tan", "Deep"],
      description: "A lightweight, buildable foundation that provides natural-looking coverage with a radiant finish. Formulated with skincare benefits to nourish your skin throughout the day.",
      features: ["SPF 30 protection", "8-hour wear", "Buildable coverage", "Hydrating formula"],
      ingredients: "Aqua, Dimethicone, Titanium Dioxide, Cyclopentasiloxane, Glycerin...",
      howToUse: "Apply with fingertips, brush, or sponge. Start from the center of your face and blend outward for even coverage."
    },
    "2": {
      id: 2,
      name: "Velvet Matte Lipstick",
      brand: "LuxeGlow",
      price: 45,
      rating: 4.9,
      reviews: 89,
      images: [lipstickImg, lipstickImg, lipstickImg],
      colors: ["#D42C2C", "#B91C1C", "#7F1D1D", "#F472B6", "#EC4899"],
      colorNames: ["Classic Red", "Deep Cherry", "Wine", "Rose Pink", "Berry"],
      description: "Luxurious matte lipstick that delivers intense color payoff with a comfortable, non-drying formula that lasts all day.",
      features: ["Long-wearing", "Non-drying", "Intense color", "Comfortable wear"],
      ingredients: "Dimethicone, Cyclopentasiloxane, Polybutene, Silica...",
      howToUse: "Apply directly to lips or use a lip brush for precise application."
    },
    "3": {
      id: 3,
      name: "Illuminating Highlighter",
      brand: "LuxeGlow",
      price: 65,
      rating: 4.7,
      reviews: 203,
      images: [highlighterImg, highlighterImg, highlighterImg],
      colors: ["#FDE68A", "#FBBF24", "#F59E0B", "#D97706"],
      colorNames: ["Champagne", "Golden", "Bronze", "Copper"],
      description: "A silky-smooth highlighter that adds a natural, luminous glow to your complexion with buildable intensity.",
      features: ["Buildable coverage", "Natural glow", "Long-lasting", "Silky texture"],
      ingredients: "Mica, Talc, Magnesium Stearate, Dimethicone...",
      howToUse: "Apply to high points of the face: cheekbones, nose bridge, cupid's bow, and brow bone."
    }
  } as const;

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({ 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.images[0], 
        brand: product.brand 
      });
    }
  };

  const handleAddToCart = () => {
    addToCart({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      image: product.images[0],
      color: product.colorNames?.[selectedColor]
    });
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
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-primary text-primary'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/products")}
            className="flex items-center space-x-1 hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Products</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-card rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-smooth ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-body text-foreground-light uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-foreground-medium font-body">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="font-heading text-3xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              {'originalPrice' in product && product.originalPrice && (
                <span className="text-xl text-foreground-light line-through font-body">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div className="space-y-3">
                <h3 className="font-body font-medium text-foreground">
                  Color: {product.colorNames?.[selectedColor] || 'Color ' + (selectedColor + 1)}
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-12 h-12 rounded-full border-2 transition-smooth hover-scale ${
                        selectedColor === index ? 'border-foreground' : 'border-border-light'
                      }`}
                      style={{ backgroundColor: color }}
                      title={product.colorNames?.[index] || `Color ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-body font-medium text-foreground">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-body font-medium text-lg">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <Button
                className="flex-1 hover-lift"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={toggleWishlist}
                className="hover-lift"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
              </Button>
            </div>

            {/* Product Details */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6 space-y-4">
                <p className="font-body text-foreground-medium leading-relaxed">
                  {product.description}
                </p>
                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 font-body text-foreground-medium">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">How to Use:</h4>
                  <p className="font-body text-foreground-medium">{product.howToUse}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-6">
                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">Full Ingredients List:</h4>
                  <p className="font-body text-foreground-medium leading-relaxed">
                    {product.ingredients}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-body font-medium text-foreground">Customer Reviews</h4>
                    <Button variant="outline" size="sm">Write a Review</Button>
                  </div>
                  <div className="text-center py-8">
                    <p className="font-body text-foreground-medium">Reviews coming soon...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;