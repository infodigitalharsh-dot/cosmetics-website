import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import CategoryGrid from "@/components/CategoryGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

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
    </div>
  );
};

export default Homepage;