import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard = ({ name, description, price, image, category }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const priceNumeric = parseFloat(price.replace(/[$,]/g, ""));

  const handleAddToCart = () => {
    addToCart({
      id: `${category}-${name}`,
      name,
      price,
      priceNumeric,
      image,
      category,
    });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="product-card group">
      <div 
        className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
        onClick={() => navigate(`/product/${category}-${name}`, { state: { name, description, price, image, category } })}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{category}</div>
        <h3 
          className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer"
          onClick={() => navigate(`/product/${category}-${name}`, { state: { name, description, price, image, category } })}
        >
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="space-y-2 pt-2">
          <div className="text-2xl font-semibold text-primary">{price}</div>
          <Button 
            onClick={handleAddToCart} 
            className="w-full btn-hero group"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
