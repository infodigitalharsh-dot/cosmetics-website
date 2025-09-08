import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We believe beauty is about feeling confident and expressing your authentic self."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Committed to eco-friendly packaging and ethically sourced ingredients."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients and rigorous testing ensure exceptional products."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where everyone feels beautiful and included."
    }
  ];

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      bio: "Former beauty editor with 15 years of industry experience."
    },
    {
      name: "Marcus Chen",
      role: "Head of Product Development",
      image: "/placeholder.svg",
      bio: "Cosmetic chemist specializing in clean beauty formulations."
    },
    {
      name: "Sofia Williams",
      role: "Creative Director",
      image: "/placeholder.svg",
      bio: "Award-winning makeup artist and beauty content creator."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="gradient-text">LuxeGlow</span>
          </h1>
          <p className="text-xl text-foreground-medium max-w-3xl mx-auto font-body leading-relaxed">
            Born from a passion for authentic beauty, LuxeGlow creates premium cosmetics 
            that celebrate your unique radiance while caring for your skin and the planet.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground-medium font-body text-lg leading-relaxed">
                <p>
                  Founded in 2018, LuxeGlow began as a dream to create cosmetics that not only 
                  enhance natural beauty but also nourish the skin with clean, effective ingredients.
                </p>
                <p>
                  What started in a small laboratory has grown into a beloved brand trusted by 
                  thousands of beauty enthusiasts worldwide. We believe that true beauty comes from 
                  feeling confident in your own skin.
                </p>
                <p>
                  Every product we create is a testament to our commitment to quality, 
                  sustainability, and the diverse beauty of our community.
                </p>
              </div>
              <Button size="lg" className="mt-8 hover-lift">
                Learn More About Our Process
              </Button>
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img 
                src="/placeholder.svg" 
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground-medium font-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-body font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-foreground-medium font-body">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center py-16 bg-gradient-card rounded-2xl">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-foreground-medium font-body leading-relaxed mb-8">
              To empower every individual to express their unique beauty through premium, 
              clean cosmetics that enhance natural radiance while promoting self-confidence 
              and celebrating diversity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-foreground-medium font-body">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-foreground-medium font-body">Cruelty-Free</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-foreground-medium font-body">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;