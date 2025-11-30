import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collections#living-room", label: "Living Room" },
    { path: "/collections#bedroom", label: "Bedroom" },
    { path: "/collections#dining", label: "Dining" },
    { path: "/collections#office", label: "Office" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-soft)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-playfair font-bold text-primary hover:text-accent transition-colors"
          >
            S.ADE FURNITURE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isActive(link.path)
                    ? "text-primary after:scale-x-100"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Cart Button */}
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Button>

            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  );
};

export default Header;