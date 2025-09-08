import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@luxeglow.com", "support@luxeglow.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us", 
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ["123 Beauty Boulevard", "New York, NY 10001"],
      description: "Flagship store & beauty studio"
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon-Sat: 10AM-8PM", "Sunday: 12PM-6PM"],
      description: "Extended holiday hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-foreground-medium max-w-3xl mx-auto font-body">
            We'd love to hear from you. Whether you have questions about our products, 
            need beauty advice, or want to share your LuxeGlow experience.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-foreground-medium font-body mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-foreground-light mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground font-body font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-body font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-foreground font-body font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-body font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth">
                    <option>Select a topic</option>
                    <option>Product Inquiry</option>
                    <option>Order Support</option>
                    <option>Beauty Consultation</option>
                    <option>Partnership</option>
                    <option>Press Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-foreground font-body font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input-border rounded-lg focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-smooth resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button size="lg" className="w-full hover-lift">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Store Info */}
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-foreground-medium font-body">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Visit Our Flagship Store
                </h3>
                <div className="space-y-4">
                  <p className="text-foreground-medium font-body">
                    Experience our full product range and get personalized beauty consultations 
                    at our beautiful flagship location in the heart of New York.
                  </p>
                  <div className="space-y-2">
                    <p className="font-body">
                      <span className="font-semibold text-foreground">Address:</span>
                      <br />123 Beauty Boulevard, New York, NY 10001
                    </p>
                    <p className="font-body">
                      <span className="font-semibold text-foreground">Phone:</span>
                      <br />+1 (555) 123-4567
                    </p>
                  </div>
                  <Button className="mt-6 hover-lift">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center py-16 bg-gradient-card rounded-2xl">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground-medium font-body mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our comprehensive FAQ section 
            or reach out to our customer service team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="hover-lift">
              View FAQ
            </Button>
            <Button className="hover-lift">
              Live Chat Support
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;