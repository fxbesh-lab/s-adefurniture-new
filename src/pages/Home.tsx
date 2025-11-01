import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-furniture.jpg";
import smallsofa from "@/assets/smallsofa.jpg";
import smallsofa2 from "@/assets/smallsofa2.jpg";
import smallsofa3 from "@/assets/smallsofa3.jpg";
import smallsofa4 from "@/assets/smallsofa4.jpg";
import smallsofa5 from "@/assets/smallsofa5.jpg";
import smallsofa6 from "@/assets/smallsofa6.jpg";
import king1 from "@/assets/king1.jpg";
import king2 from "@/assets/king2.jpg";
import king3 from "@/assets/king3.jpg";
import stool1 from "@/assets/stool1.jpg";
import stool3 from "@/assets/stool3.jpg";
import stool2 from "@/assets/stool2.jpg";



import { ArrowRight, Sofa, Bed, Utensils, Briefcase } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const categories = [
    {
      icon: Sofa,
      title: "Living Room",
      description: "Comfort meets style",
    },
    {
      icon: Bed,
      title: "Bedroom",
      description: "Your personal sanctuary",
    },
    {
      icon: Utensils,
      title: "Dining",
      description: "Gather in elegance",
    },
    {
      icon: Briefcase,
      title: "Office",
      description: "Productive spaces",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Elegant living room furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                Transform Your Home with Timeless Furniture
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Explore handcrafted pieces that blend comfort and elegance
              </p>
              <Link to="/collections">
                <Button size="lg" className="btn-hero text-lg px-8 py-6 group">
                  Shop Collection
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12">
              Explore Our Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to="/collections"
                  className="group p-8 bg-card rounded-lg border border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
                >
                  <category.icon className="w-12 h-12 mb-4 text-primary group-hover:text-accent transition-colors" />
                  <h3 className="text-2xl font-playfair font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Designs */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12">
              Latest Designs
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {/* Living Room Collection */}
           <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                     name="Shell Accent Chair Set"
                     description="Elegant pair of shell-back armchairs with a matching round side table, upholstered in soft beige fabric and supported by sleek wooden legs."
                     price="₦175,000"
                      image={smallsofa} 
                       category="Living Room"
                      />
            </CarouselItem>

            

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                    name="Luxury Round Armchair Set"
                    description="Plush round armchairs with tufted velvet upholstery, gold base accents, and a modern circular design that adds elegance to any living room."
                    price="₦90,000"
                    image={smallsofa2} 
                     category="Living Room"
                      />
                </CarouselItem>

               <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                 <ProductCard
                   name="Tufted Velvet Loveseat"
                   description="Elegant grey tufted velvet loveseat featuring soft cushioning, silver nailhead trim, and vintage wooden legs — ideal for cozy modern living rooms."
                   price="₦180,000"
                   image={smallsofa3} // import this image
                   category="Living Room"
                 />
               </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         name="Royal High-Back Throne Chair"
                         description="Elegant high-back throne chair with intricate gold carvings and tufted white leather, designed for a regal and sophisticated living space."
                         price="₦200,000"
                         image={king1} 
                         category="Luxury"
                      />
                </CarouselItem>

                {/* Bedroom Collection */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard
                       name="Royal Black and Gold Sofa"
                       description="Elegant black tufted sofa with intricate gold carvings, exuding a royal and timeless charm perfect for luxury interiors."
                       price="₦140,000"
                       image={king2} 
                       category="Luxury"
                     />
                  </CarouselItem>


                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard
                   name="Crimson Velvet Ottoman"
                  description="Elegant deep red tufted velvet ottoman with a gold base, perfect as a statement accent for luxury living rooms."
                  price="₦25,000"
                  image={stool1}
                  category="Luxury"
                 />
                </CarouselItem>
                {/* Dining Collection */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                 <ProductCard
                    name="Royal Blue Velvet Chair "
                    description="Plush high-back blue velvet armchairs with golden accent and matching ottoman, blending comfort with luxury style."
                     price="₦150,000"
                    image={king3} 
                    category="Luxury"
                  />
                    </CarouselItem>
               <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                           <ProductCard
                         name="Tufted Cube Ottomans"
                    description="Contemporary black and white cube ottomans with deep button tufting — stylish and versatile for any modern living space."
                    price="₦25,000"
                    image={stool2} 
                    category="Living Room"
                   />
                 </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <ProductCard
                            name="Tufted Marble Coffee Table"
                            description="Elegant oval coffee table featuring a tufted velvet base and polished brown marble top — perfect centerpiece for sophisticated living spaces."
                           price="₦90,000"
                            image={stool3} 
                      category="Living Room"
                     />
                    </CarouselItem>

                {/* Office Collection */}
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <ProductCard
                    name="Modern Curved Velvet Sofa"
                    description="Luxurious curved velvet sofa in rich burnt orange with slim gold legs, offering a sculptural and contemporary design perfect for elegant living spaces."
                    price="₦210,000"
                    image={smallsofa4} 
                    category="Living Room"
                   />
               </CarouselItem> 

                {/* Living Room Collection */}
                 <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      name="Mustard Velvet Accent Chair"
                      description="Elegant scallop-back velvet chair in rich mustard yellow, accented with gold tapered legs for a stylish and cozy touch to any living space."
                      price="₦75,000"
                      image={smallsofa5} 
                      category="Living Room"
                     />
                  </CarouselItem>

                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                   <ProductCard
                    name="Mid-Century Mustard Velvet Chair"
                    description="Stylish mid-century velvet accent chair with button-tufted back and gold tapered legs. Perfect for living rooms, lounges, or offices."
                    price="₦85,000"
                     image={smallsofa6} 
                    category="Living Room"
                 />
              </CarouselItem>

              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Why Choose S.ADE FURNITURE?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We craft furniture that tells a story of quality, comfort, and timeless design
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <div className="text-4xl font-playfair font-bold text-primary">100%</div>
                <h3 className="text-xl font-semibold">Handcrafted Quality</h3>
                <p className="text-muted-foreground">Each piece meticulously crafted by skilled artisans</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-playfair font-bold text-primary">Premium</div>
                <h3 className="text-xl font-semibold">Finest Materials</h3>
                <p className="text-muted-foreground">Sourced from sustainable, high-quality suppliers</p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-playfair font-bold text-primary">Timeless</div>
                <h3 className="text-xl font-semibold">Enduring Design</h3>
                <p className="text-muted-foreground">Classic aesthetics that never go out of style</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
