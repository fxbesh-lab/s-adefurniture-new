import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";


import { livingRoomProducts, bedroomProducts, diningProducts, kitchenProducts } from "@/data/products";

const Collections = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Our Collections</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover furniture that transforms houses into homes. Each piece thoughtfully designed for your comfort and style.
            </p>
          </div>
        </section>

        {/* Living Room */}
        <section id="living-room" className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-8">Living Room Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {livingRoomProducts.map((product, index) => (
                <Link key={index} to={`/product/${index}`} state={product}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bedroom */}
        <section id="bedroom" className="section-padding bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-8">Bedroom Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bedroomProducts.map((product) => (
                <Link key={product.name} to={`/product/${encodeURIComponent(product.name)}`} state={product}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Dining */}
        <section id="dining" className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-8">Dining Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diningProducts.map((product) => (
                <Link key={product.name} to={`/product/${encodeURIComponent(product.name)}`} state={product}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Kitchen */}
        <section id="kitchen" className="section-padding bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-4xl font-playfair font-bold mb-8">Kitchen Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {kitchenProducts.map((product) => (
                <Link key={product.name} to={`/product/${encodeURIComponent(product.name)}`} state={product}>
                  <ProductCard {...product} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;