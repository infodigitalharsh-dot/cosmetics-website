import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import CategoryGrid from "@/components/CategoryGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BrandStory />
        <CategoryGrid />
        <SocialProof />
      </main>
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default Homepage;