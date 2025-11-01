import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import emailjs from "@emailjs/browser";
import { Trash2 } from "lucide-react";

const Order = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const { items, clearCart, removeFromCart, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    phone: "",
    address: "",
    additionalNotes: "",
  });

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `ORD-${timestamp}-${random}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate unique order number
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);

      // Initialize EmailJS with your public key
      emailjs.init("GUO9wYQBPsLaN3YP8");

      const orderDetails = items
        .map((item) => `${item.name} (x${item.quantity}) - ${item.price}`)
        .join("\n");

      await emailjs.send(
        "service_tdni8ic",
        "template_76epes9",
        {
          to_email: "admin@sadefurniture.com",
          order_number: newOrderNumber,
          product_details: orderDetails,
          total_amount: totalPrice.toFixed(2),
          product_image: items[0]?.image || "",
          customer_name: formData.fullName,
          customer_whatsapp: formData.whatsapp,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          notes: formData.additionalNotes || "None",
          year: new Date().getFullYear(),
        }
      );

      toast({
        title: "Order Request Sent!",
        description: `Order #${newOrderNumber} - We'll contact you soon to confirm.`,
        duration: 10000,
      });

      // Reset form and clear cart
      setFormData({
        fullName: "",
        whatsapp: "",
        email: "",
        phone: "",
        address: "",
        additionalNotes: "",
      });
      clearCart();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send order request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-playfair font-bold mb-4">Place Your Order</h1>
            <p className="text-lg text-muted-foreground">
              Review your cart and complete your order details
            </p>
            {orderNumber && (
              <div className="mt-4 p-4 bg-primary/10 border border-primary rounded-lg inline-block">
                <p className="text-sm font-semibold text-primary">
                  Order Number: <span className="font-mono text-lg">{orderNumber}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Please save this number for your records
                </p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cart Summary */}
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)] border border-border">
              <h2 className="text-2xl font-playfair font-bold mb-6">Order Summary</h2>
              
              {items.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Your cart is empty</p>
                  <Button className="mt-4" asChild>
                    <a href="/collections">Browse Collections</a>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-3 border border-border rounded"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-sm">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-primary font-semibold">{item.price}</span>
                            <span className="text-sm">Qty: {item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">
                         ₦{totalPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Order Form */}
            <div className="bg-card p-6 rounded-lg shadow-[var(--shadow-soft)] border border-border">
              <h2 className="text-2xl font-playfair font-bold mb-6">Your Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="123 Main Street, City, State, ZIP"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Special requests, preferred delivery time, etc."
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-hero text-lg py-6"
                  disabled={isSubmitting || items.length === 0}
                >
                  {isSubmitting ? "Sending..." : "Submit Order Request"}
                </Button>
              </form>

              <div className="mt-4 p-3 bg-secondary rounded text-xs text-muted-foreground">
                <strong>Note:</strong> This is an order request. We'll contact you via email 
                to confirm availability and arrange payment.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
