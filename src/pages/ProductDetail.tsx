import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";


import { livingRoomProducts, bedroomProducts, diningProducts, kitchenProducts } from "@/data/products";

interface ProductState {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  features?: string[];
  dimensions?: string;
  material?: string;
}

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const product = location.state as ProductState;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-playfair font-bold mb-4">Product not found</h1>
            <Button onClick={() => navigate("/collections")}>
              Back to Collections
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const priceNumeric = parseFloat(product.price.replace(/[$,₦,]/g, ""));

  const handleAddToCart = () => {
    addToCart({
      id: `${product.category}-${product.name}`,
      name: product.name,
      price: product.price,
      priceNumeric,
      image: product.image,
      category: product.category,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // ✅ Combine all products
  const allProducts = [
    ...livingRoomProducts,
    ...bedroomProducts,
    ...diningProducts,
    ...kitchenProducts,
  ];

  // ✅ Find related products
  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.name !== product.name
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="section-padding">
          <div className="container mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="text-4xl font-bold text-primary">
                  {product.price}
                </div>

                {/* Additional Details */}
                <div className="space-y-4 py-6 border-y border-border">
                  <div>
                    <h3 className="font-semibold mb-2">Features</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Premium quality materials</li>
                      <li>• Expertly crafted construction</li>
                      <li>• Modern and timeless design</li>
                      <li>• Easy assembly with included hardware</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Material</h3>
                    <p className="text-muted-foreground">
                      Solid wood frame with premium upholstery
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Care Instructions</h3>
                    <p className="text-muted-foreground">
                      Wipe clean with a soft, dry cloth. Avoid harsh chemicals.
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full btn-hero group"
                >
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* ✅ Related Products Section */}
            {relatedProducts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-3xl font-playfair font-bold mb-6">
                  Related Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedProducts.map((rp) => (
                    <ProductCard key={rp.id} {...rp} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;