// Product images
import moisturizerLuxury from "@/assets/products/moisturizer-luxury.jpg";
import vitaminCSerum from "@/assets/products/vitamin-c-serum.jpg";
import hydratingMask from "@/assets/products/hydrating-mask.jpg";
import foundationPremium from "@/assets/products/foundation-premium.jpg";
import luxuryLipstick from "@/assets/products/luxury-lipstick.jpg";
import eyeCream from "@/assets/products/eye-cream.jpg";
import sunscreen from "@/assets/products/sunscreen.jpg";
import premiumMascara from "@/assets/products/premium-mascara.jpg";
import cleanser from "@/assets/products/cleanser.jpg";
import toner from "@/assets/products/toner.jpg";
import exfoliator from "@/assets/products/exfoliator.jpg";
import highlighterCompact from "@/assets/products/highlighter-compact.jpg";
import nightCream from "@/assets/products/night-cream.jpg";
import retinolSerum from "@/assets/products/retinol-serum.jpg";
import bodyLotion from "@/assets/products/body-lotion.jpg";
import micellarWater from "@/assets/products/micellar-water.jpg";
import eyeshadowPalette from "@/assets/products/eyeshadow-palette.jpg";
import lipBalm from "@/assets/products/lip-balm.jpg";
import primer from "@/assets/products/primer.jpg";
import settingSpray from "@/assets/products/setting-spray.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Luxury Hydrating Moisturizer",
    description: "Premium anti-aging moisturizer with hyaluronic acid and peptides for deep hydration and youthful skin.",
    price: 89.99,
    originalPrice: 119.99,
    image: moisturizerLuxury,
    category: "Skincare",
    brand: "LuxeGlow",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    isBestSeller: true,
    tags: ["anti-aging", "hydrating", "hyaluronic acid"]
  },
  {
    id: 2,
    name: "Vitamin C Brightening Serum",
    description: "Powerful vitamin C serum that brightens complexion and reduces dark spots for radiant, even-toned skin.",
    price: 65.00,
    image: vitaminCSerum,
    category: "Skincare",
    brand: "GlowUp",
    rating: 4.9,
    reviewCount: 189,
    inStock: true,
    isNew: true,
    tags: ["vitamin c", "brightening", "serum"]
  },
  {
    id: 3,
    name: "Deep Hydrating Face Mask",
    description: "Intensive overnight mask with natural botanicals and ceramides for deeply moisturized, plump skin.",
    price: 45.50,
    image: hydratingMask,
    category: "Skincare",
    brand: "PureNature",
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    tags: ["mask", "hydrating", "overnight"]
  },
  {
    id: 4,
    name: "Flawless Coverage Foundation",
    description: "Full coverage, long-lasting foundation with SPF 20 that provides a natural, airbrushed finish.",
    price: 52.00,
    originalPrice: 68.00,
    image: foundationPremium,
    category: "Makeup",
    brand: "PerfectBase",
    rating: 4.7,
    reviewCount: 298,
    inStock: true,
    isBestSeller: true,
    tags: ["foundation", "full coverage", "spf"]
  },
  {
    id: 5,
    name: "Velvet Matte Lipstick",
    description: "Luxurious matte lipstick with intense color payoff and comfortable, long-wearing formula.",
    price: 28.99,
    image: luxuryLipstick,
    category: "Makeup",
    brand: "ColorCraft",
    rating: 4.5,
    reviewCount: 432,
    inStock: true,
    tags: ["lipstick", "matte", "long-wearing"]
  },
  {
    id: 6,
    name: "Anti-Aging Eye Cream",
    description: "Targeted eye treatment that reduces fine lines, puffiness, and dark circles for brighter, younger-looking eyes.",
    price: 78.00,
    image: eyeCream,
    category: "Skincare",
    brand: "YouthRevive",
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    tags: ["eye cream", "anti-aging", "depuffing"]
  },
  {
    id: 7,
    name: "Broad Spectrum SPF 50 Sunscreen",
    description: "Lightweight, non-greasy sunscreen with zinc oxide protection that works under makeup seamlessly.",
    price: 35.00,
    image: sunscreen,
    category: "Skincare",
    brand: "SunShield",
    rating: 4.6,
    reviewCount: 278,
    inStock: true,
    isNew: true,
    tags: ["sunscreen", "spf 50", "zinc oxide"]
  },
  {
    id: 8,
    name: "Volume & Length Mascara",
    description: "Waterproof mascara that dramatically lengthens and volumizes lashes without clumping or flaking.",
    price: 32.50,
    image: premiumMascara,
    category: "Makeup",
    brand: "LashLux",
    rating: 4.7,
    reviewCount: 356,
    inStock: true,
    isBestSeller: true,
    tags: ["mascara", "waterproof", "volumizing"]
  },
  {
    id: 9,
    name: "Gentle Foam Cleanser",
    description: "pH-balanced foaming cleanser that removes makeup and impurities while maintaining skin's natural moisture barrier.",
    price: 26.00,
    image: cleanser,
    category: "Skincare",
    brand: "PureCleanse",
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
    tags: ["cleanser", "gentle", "foam"]
  },
  {
    id: 10,
    name: "Balancing Hydrating Toner",
    description: "Alcohol-free toner with niacinamide and rose water that balances pH and preps skin for serums.",
    price: 38.00,
    image: toner,
    category: "Skincare",
    brand: "BalanceBeauty",
    rating: 4.4,
    reviewCount: 145,
    inStock: true,
    tags: ["toner", "niacinamide", "hydrating"]
  },
  {
    id: 11,
    name: "Gentle Exfoliating Scrub",
    description: "Weekly exfoliating treatment with natural fruit enzymes that reveals smoother, brighter skin texture.",
    price: 42.00,
    originalPrice: 55.00,
    image: exfoliator,
    category: "Skincare",
    brand: "GlowRenew",
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    tags: ["exfoliator", "enzymes", "weekly treatment"]
  },
  {
    id: 12,
    name: "Illuminating Highlighter Compact",
    description: "Buttery smooth highlighter with buildable coverage that gives skin a natural, luminous glow.",
    price: 36.99,
    image: highlighterCompact,
    category: "Makeup",
    brand: "RadiantGlow",
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    tags: ["highlighter", "illuminating", "buildable"]
  },
  {
    id: 13,
    name: "Intensive Night Cream",
    description: "Rich overnight moisturizer with retinol and peptides that repairs and regenerates skin while you sleep.",
    price: 95.00,
    image: nightCream,
    category: "Skincare",
    brand: "NightRepair",
    rating: 4.9,
    reviewCount: 134,
    inStock: true,
    isNew: true,
    tags: ["night cream", "retinol", "regenerating"]
  },
  {
    id: 14,
    name: "0.5% Retinol Treatment Serum",
    description: "Clinical-strength retinol serum that reduces fine lines, improves texture, and promotes cellular renewal.",
    price: 72.00,
    image: retinolSerum,
    category: "Skincare",
    brand: "ClinicalSkin",
    rating: 4.7,
    reviewCount: 189,
    inStock: false,
    tags: ["retinol", "anti-aging", "clinical"]
  },
  {
    id: 15,
    name: "Silky Body Moisturizer",
    description: "Fast-absorbing body lotion with shea butter and coconut oil that leaves skin soft and hydrated all day.",
    price: 29.99,
    image: bodyLotion,
    category: "Body Care",
    brand: "SilkySmooth",
    rating: 4.5,
    reviewCount: 298,
    inStock: true,
    tags: ["body lotion", "shea butter", "fast-absorbing"]
  },
  {
    id: 16,
    name: "Micellar Cleansing Water",
    description: "Gentle no-rinse makeup remover that cleanses, removes makeup, and tones in one step without irritation.",
    price: 22.50,
    image: micellarWater,
    category: "Skincare",
    brand: "GentleClean",
    rating: 4.6,
    reviewCount: 412,
    inStock: true,
    isBestSeller: true,
    tags: ["micellar water", "makeup remover", "gentle"]
  },
  {
    id: 17,
    name: "Sunset Eyeshadow Palette",
    description: "12-shade eyeshadow palette with warm tones, highly pigmented colors, and blendable matte and shimmer finishes.",
    price: 58.00,
    originalPrice: 78.00,
    image: eyeshadowPalette,
    category: "Makeup",
    brand: "ColorStory",
    rating: 4.9,
    reviewCount: 356,
    inStock: true,
    isBestSeller: true,
    tags: ["eyeshadow", "palette", "warm tones"]
  },
  {
    id: 18,
    name: "Nourishing Lip Balm",
    description: "Moisturizing lip treatment with vitamin E and natural oils that heals and protects dry, chapped lips.",
    price: 12.99,
    image: lipBalm,
    category: "Lip Care",
    brand: "LipLove",
    rating: 4.4,
    reviewCount: 567,
    inStock: true,
    tags: ["lip balm", "vitamin e", "moisturizing"]
  },
  {
    id: 19,
    name: "Smoothing Face Primer",
    description: "Silky primer that blurs pores, smooths texture, and extends makeup wear for a flawless base.",
    price: 44.00,
    image: primer,
    category: "Makeup",
    brand: "SmoothBase",
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    tags: ["primer", "pore-blurring", "smoothing"]
  },
  {
    id: 20,
    name: "All-Day Setting Spray",
    description: "Lightweight setting spray that locks makeup in place for up to 16 hours with a natural, dewy finish.",
    price: 33.00,
    image: settingSpray,
    category: "Makeup",
    brand: "SetAndForget",
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    isNew: true,
    tags: ["setting spray", "long-lasting", "dewy finish"]
  }
];

export const categories = [
  "All Products",
  "Skincare", 
  "Makeup",
  "Body Care",
  "Lip Care"
];

export const brands = [
  "All Brands",
  "LuxeGlow",
  "GlowUp", 
  "PureNature",
  "PerfectBase",
  "ColorCraft",
  "YouthRevive",
  "SunShield",
  "LashLux",
  "PureCleanse",
  "BalanceBeauty",
  "GlowRenew",
  "RadiantGlow",
  "NightRepair",
  "ClinicalSkin",
  "SilkySmooth",
  "GentleClean",
  "ColorStory",
  "LipLove",
  "SmoothBase",
  "SetAndForget"
];

export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $75", min: 50, max: 75 },
  { label: "$75 - $100", min: 75, max: 100 },
  { label: "Over $100", min: 100, max: Infinity }
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "Name: A to Z" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" }
];