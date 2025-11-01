import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Hammer, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting timeless furniture with passion and precision since our inception
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl font-playfair font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At S.ADE FURNITURE, we believe that furniture is more than just functional pieces—it's an 
                expression of your lifestyle and personality. Our mission is to create beautifully crafted 
                furniture that transforms houses into homes, combining timeless design with modern comfort.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every piece we create is a testament to our commitment to quality, sustainability, and 
                exceptional craftsmanship. We work with skilled artisans who pour their expertise and 
                passion into every detail, ensuring that each item meets our exacting standards.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Hammer size={32} />
                </div>
                <h3 className="text-2xl font-playfair font-semibold">Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Each piece is handcrafted by skilled artisans with decades of experience, ensuring 
                  unparalleled quality and attention to detail.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Leaf size={32} />
                </div>
                <h3 className="text-2xl font-playfair font-semibold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We source materials responsibly, using sustainable wood and eco-friendly finishes 
                  to minimize our environmental impact.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-playfair font-semibold">Customer Care</h3>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority. We're dedicated to providing exceptional service 
                  from selection through delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl font-playfair font-bold">Materials & Quality</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We believe in using only the finest materials to create furniture that stands the test 
                of time. Our solid wood is carefully selected from sustainable sources, chosen for its 
                durability, beauty, and character. Premium fabrics and upholstery are sourced from 
                trusted suppliers who share our commitment to quality.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every joint is reinforced, every finish is meticulously applied, and every piece 
                undergoes rigorous quality checks before it reaches your home. This dedication to 
                excellence ensures that your S.ADE FURNITURE pieces will be cherished for 
                generations to come.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
