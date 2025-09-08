import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, User, Tag } from "lucide-react";

const BeautyTips = () => {
  const featuredArticle = {
    id: 1,
    title: "The Ultimate Guide to Glowing Skin: 10 Steps to Radiance",
    excerpt: "Discover the secrets to achieving that coveted natural glow with our comprehensive skincare routine guide.",
    image: "/placeholder.svg",
    author: "Elena Rodriguez",
    readTime: "8 min read",
    category: "Skincare",
    date: "March 15, 2024"
  };

  const articles = [
    {
      id: 2,
      title: "Summer Makeup Trends: Fresh Looks for Warm Weather",
      excerpt: "Stay cool and gorgeous with these trending summer makeup looks that last all day.",
      image: "/placeholder.svg",
      author: "Sofia Williams",
      readTime: "5 min read",
      category: "Makeup",
      date: "March 12, 2024"
    },
    {
      id: 3,
      title: "Color Theory for Makeup: Finding Your Perfect Palette",
      excerpt: "Learn how to choose colors that complement your skin tone and bring out your natural beauty.",
      image: "/placeholder.svg",
      author: "Marcus Chen",
      readTime: "6 min read",
      category: "Color Guide",
      date: "March 10, 2024"
    },
    {
      id: 4,
      title: "Sustainable Beauty: Eco-Friendly Routine Tips",
      excerpt: "Build a beauty routine that's kind to both your skin and the environment.",
      image: "/placeholder.svg",
      author: "Elena Rodriguez",
      readTime: "4 min read",
      category: "Sustainability",
      date: "March 8, 2024"
    },
    {
      id: 5,
      title: "Evening Glamour: Master the Art of Night-Out Makeup",
      excerpt: "Transform your daytime look into evening elegance with these expert techniques.",
      image: "/placeholder.svg",
      author: "Sofia Williams",
      readTime: "7 min read",
      category: "Makeup",
      date: "March 5, 2024"
    },
    {
      id: 6,
      title: "Skincare Ingredients Decoded: What Really Works",
      excerpt: "Cut through the marketing hype and learn which skincare ingredients deliver real results.",
      image: "/placeholder.svg",
      author: "Marcus Chen",
      readTime: "9 min read",
      category: "Skincare",
      date: "March 3, 2024"
    }
  ];

  const categories = ["All", "Skincare", "Makeup", "Color Guide", "Sustainability", "Tutorials"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Beauty <span className="gradient-text">Tips</span>
          </h1>
          <p className="text-xl text-foreground-medium max-w-3xl mx-auto font-body">
            Expert advice, tutorials, and insider secrets to help you look and feel your absolute best. 
            From skincare fundamentals to advanced makeup techniques.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Featured Article */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto bg-muted">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-muted text-foreground-medium px-3 py-1 rounded-full text-sm">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-foreground-medium font-body mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-foreground-light mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button className="hover-lift w-fit">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover-lift"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-muted text-foreground-medium px-3 py-1 rounded-full text-sm flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-foreground-medium font-body mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-foreground-light">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center py-16 mt-16 bg-gradient-card rounded-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Stay Updated with Beauty Trends
          </h2>
          <p className="text-foreground-medium font-body mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest beauty tips, exclusive tutorials, 
            and product recommendations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
            />
            <Button className="hover-lift">
              Subscribe
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BeautyTips;