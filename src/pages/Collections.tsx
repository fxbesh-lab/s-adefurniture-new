import milano from "@/assets/milano.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import lshape1 from "@/assets/l-shape1.jpg";
import lshape2 from "@/assets/l-shape2.jpg";
import sofa_set1 from "@/assets/sofa_set1.jpg"
import sofa_set2 from "@/assets/sofa_set2.jpg"
import sofa3 from "@/assets/sofa3.jpg"

import tvpanel1 from "@/assets/tvpanel1.jpg"
import tv1 from "@/assets/tv1.jpg"
import tv2 from "@/assets/tv2.jpg"
import tv3 from "@/assets/tv3.jpg"
import tv4 from "@/assets/tv4.jpg"
import tv5 from "@/assets/tv5.jpg"
import tv6 from "@/assets/tv6.jpg"
import tv7 from "@/assets/tv7.jpg"
import tv8 from "@/assets/tv8.jpg"
import tv9 from "@/assets/tv9.jpg"
import diningtable1 from "@/assets/diningtable1.jpg" 
import dining1 from "@/assets/dining1.jpg" 
import dining2 from "@/assets/dining2.jpg"
import dining3 from "@/assets/dining3.jpg"

import wardrobe1 from "@/assets/wardrobe1.jpg";
import wardrobe4 from "@/assets/wardrobe4.jpg";
import wardrobe5 from "@/assets/wardrobe5.jpg";
import wardrobe7 from "@/assets/wardrobe7.jpg";
import wardrobe8 from "@/assets/wardrobe8.jpg";
import wardrobe9 from "@/assets/wardrobe9.jpg";
import wardrobe10 from "@/assets/wardrobe10.jpg";


import bedframe1 from "@/assets/bedframe1.jpg";
import bedframe2 from "@/assets/bedframe2.jpg"
import bedframe3 from "@/assets/bedframe3.jpg"
import bedframe4 from "@/assets/bedframe4.jpg"
import bedframe5 from "@/assets/bedframe5.jpg"
import bedframe6 from "@/assets/bedframe6.jpg"
import bedframe7 from "@/assets/bedframe7.jpg"
import bedframe8 from "@/assets/bedframe8.jpg"
import bedframe9 from "@/assets/bedframe9.jpg"
import bedframe10 from "@/assets/bedframe10.jpg"
import bedframe11 from "@/assets/bedframe11.jpg"


import kitchen1 from "@/assets/kitchen1.jpg"
import kitchen2 from "@/assets/kitchen2.jpg"
import kitchen3 from "@/assets/kitchen3.jpg"
import kitchen4 from "@/assets/kitchen4.jpg"
import kitchen5 from "@/assets/kitchen5.jpg"
import kitchen6 from "@/assets/kitchen6.jpg"
import kitchen7 from "@/assets/kitchen7.jpg"
import kitchen8 from "@/assets/kitchen8.jpg"

const Collections = () => {
  const livingRoomProducts = [
    {
      name: "Milano Sofa",
      description: "Luxurious 3-seater sofa with premium upholstery and solid wood frame",
      price: " ₦400,000",
      image: milano,
      category: "Living Room",
    },
    {
      
     name: "Premium Leather Sofa Set",
      description: "Luxurious 5-seater leather sofa set in a rich tan finish, featuring deep cushions, soft armrests, and a sleek wooden trim design for timeless comfort and elegance.",
      price: "₦480,000",
      image: sofa3,
      category: "Living Room",


    },
     {
      name: "Modern Grey L-Shaped Sectional Sofa with Chaise",
      description: "Modern grey L-shaped sectional sofa with chaise, featuring hidden storage and comfortable high-density cushions.",
      price: " ₦680,000",
      image: lshape1,
      category: "Living Room",
    },
    
     {
    name: "Luxury Velvet Sofa Set with Gold Accents",
    description: "Elegant dark grey velvet sofa set featuring gold accent trims, plush yellow throw pillows, and sturdy gold legs for a luxurious living room feel.",
    price: " ₦550,000",
    image: sofa_set1,
    category: "Living Room",
   },
   {
  name: "Modern Wall-Mounted TV Console with Panel",
  description: "Sleek white wall-mounted TV unit with a minimalist slatted panel design, featuring black side accents and open storage compartments for a clean, modern living room look.",
  price: " ₦250,000",
  image: tvpanel1,
  category: "Living Room",
},
   {
  name: "Elegant Green Velvet Sofa Set with Center Table",
  description: "Chic deep-green velvet sofa set featuring a long sectional and two accent chairs, paired with a modern wooden center table and colorful area rug for a cozy, stylish living room.",
  price: " ₦480,000",
  image: sofa_set2,
  category: "Living Room",
},
{
  name: "Modern Marble-Inspired TV Wall Panel with LED Lights",
  description: "Elegant modern TV wall panel featuring a marble-effect center, vertical gold-accented slats, and ambient LED lighting for a luxurious living room setup. Includes a sleek floating console with storage drawers.",
  price: " ₦220,000",
  image: tv2,
  category: "Living Room",
},

{
  name: "Two-Tone Modern TV Console with Panel",
  description: "Contemporary TV wall unit featuring a warm wood-tone frame and soft lavender panels. Includes a sleek console with drawers and open shelving for media devices, paired with a decorative slatted backboard for a clean, minimalist look.",
  price: " ₦200,000",
  image: tv1,
  category: "Living Room",
},

{
  name: "Luxury Grey & White TV Wall Unit with Shelves",
  description: "Elegant modern TV wall design featuring a white and grey two-tone finish. Includes floating drawers, open display shelves, vertical slats, and integrated LED lighting for a sleek contemporary look perfect for living rooms.",
  price: " ₦300,000",
  image: tv3,
  category: "Living Room",
},
{
  name: "Modern Marble look TV Wall Unit with LED Shelves",
  description: "A premium modern TV wall design combining natural wood slats, white cabinetry, and a marble-pattern TV backdrop with soft LED backlighting. Features open illuminated shelves and a sleek floating console for an elegant finish.",
  price: " ₦320,000",
  image: tv4,
  category: "Living Room",
},
{
  name: "Luxury Marble & Wood TV Wall Unit with Ambient Lighting",
  description: "A sophisticated wall-mounted TV design featuring a marble-effect backdrop, vertical wood panels, and soft warm LED lighting. Includes sleek floating cabinets and an illuminated display shelf for a premium, cozy atmosphere.",
  price: " ₦330,000",
  image: tv5,
  category: "Living Room",
},
{
  name: "Minimalist White Marble & Gray Panel TV Wall Unit",
  description: "A sleek modern TV wall design featuring a marble-finish backdrop framed with vertical gray panels. The floating cabinet provides concealed storage while the integrated soft white lighting enhances the clean, luxurious aesthetic.",
  price: " ₦330,000",
  image: tv6,
  category: "Living Room",
},
{
  name: "Grey Slate Modern TV Wall Unit",
  description: "A luxurious modern wall-mounted TV unit featuring vertical grey panels, integrated LED lighting, and matte white storage cabinets. Perfect for minimalist interiors with a refined, architectural touch.",
  price: " ₦310,000",
  image: tv7,
  category: "Living Room",
},
{
  name: "Marble Luxe TV Console & Center Table Set",
  description: "An elegant white marble-inspired TV console paired with a matching coffee table. Featuring gold-finished legs and handles, this modern set blends luxury and simplicity, ideal for sophisticated living rooms.",
  price: " ₦250,000",
  image: tv8,
  category: "TV Stand",
},
{
  name: "Nordic Duo TV Console & Coffee Table Set",
  description: "A stylish blend of walnut wood and matte white panels. This two-piece set includes a TV console and coffee table designed with clean lines, built-in drawers, and a Scandinavian aesthetic that brings warmth and elegance to your living space.",
  price: " ₦280,000",
  image: tv9,
  category: "TV Console & Table Set",
}









  ];

  const bedroomProducts = [
    {
     name: "Modern Upholstered Bed Frame with Vertical Stitching",
     description: "Contemporary low-profile bed frame with clean vertical-stitched upholstery in a neutral tone, finished with gold-accented legs for a sleek and minimalist bedroom design.",
     price: " ₦280,000",
     image: bedframe2,
     category: "Bedroom",
    },
    {
  name: "Simple Upholstered Bed Frame in Off-White Fabric",
  description: "Minimalist upholstered bed frame with a tall, cushioned headboard in soft off-white fabric, perfect for a clean and modern bedroom aesthetic.",
  price: " ₦250,000",
  image: bedframe3,
  category: "Bedroom",
},
     {
  name: "Modern Board Single Bed Frame with Padded Headboard",
  description: "Stylish single bed frame made from durable modern board, featuring a soft white tufted headboard for a sleek and comfortable bedroom design.",
  price: " ₦180,000",
  image: bedframe4,
  category: "Bedroom",
},
{
  name: "Modern Board Bed Frame with Wardrobe Set",
  description: "Elegant black modern board bedroom set featuring a sleek bed frame with white upholstered tufted headboard panels, matching side drawers, and a spacious wardrobe with silver handles — ideal for a stylish and contemporary bedroom.",
  price: " ₦380,000",
  image: bedframe5,
  category: "Bedroom",
},
{
  name: "Luxury King Bed Frame with Gold Trim and Quilted Upholstery",
  description: "Stunning king-sized bed frame featuring a geometric quilted headboard with gold accents, paired with matching bedside drawers for an elegant and contemporary bedroom statement.",
  price: "₦400,000",
  image: bedframe7,
  category: "Bedroom",
},
{
  name: "Modern Beige Upholstered Bed Frame with Gold Accents",
  description: "Chic and contemporary bed frame upholstered in soft beige velvet, featuring a striking geometric headboard with gold detailing for a luxurious minimalist aesthetic.",
  price: "₦270,000",
  image: bedframe8,
  category: "Bedroom",
},
{
  name: "Champagne Velvet Bed Frame with Gold Accents",
  description: "Elegant champagne velvet bed frame with bold geometric gold detailing on the headboard, combining luxury and modern design for a refined bedroom centerpiece.",
  price: "₦330,000",
  image: bedframe9,
  category: "Bedroom",
},
{
  name: "Beige Channel-Tufted Bed Frame",
  description: "Modern beige velvet bed frame with vertical channel-tufted headboard and footboard, offering a soft, structured look that complements both classic and contemporary interiors.",
  price: "₦330,000",
  image: bedframe10,
  category: "Bedroom",
},
{
  name: "Two-Tone Panel Bed Frame",
  description: "Elegant bed frame featuring a dual-texture headboard with vertical and horizontal panels framed in natural wood. Upholstered in soft grey fabric, this bed blends modern design with a touch of warmth and sophistication.",
  price: "₦280,000",
  image: bedframe11,
  category: "Bedroom",
},



    {
      
     name: "Royal Purple Tufted Bed Frame with Nightstand",
     description: "Luxurious upholstered bed frame in deep purple velvet with diamond-tufted detailing and an elegant high headboard, paired with a matching two-drawer nightstand for a regal bedroom look.",
     price: " ₦270,000",
     image: bedframe1,
     category: "Bedroom",


    },
    {
  name: "Two-Tone Wardrobe with Mirror Section",
  description: "A stylish modern wardrobe combining matte navy blue and natural oak finishes. Includes upper storage, deep drawers, and a dressing mirror with built-in LED lighting — ideal for bedrooms with a clean, elegant look.",
  price: " ₦400,000",
  image: wardrobe4,
  category: "Bedroom",
},

    {
  name: "Modern Grey and Gold Upholstered Bed Frame",
  description: "Stylish upholstered bed frame in soft grey fabric featuring a bold geometric headboard design accented with gold detailing, offering a luxurious and contemporary touch to any bedroom.",
  price: " ₦280,000",
  image: bedframe6,
  category: "Bedroom",
},
   {
  name: "Classic Dark Walnut Wardrobe",
  description: "Elegant three-door wardrobe crafted from high-quality board material in a dark walnut finish, featuring sleek metal handles and three lower drawers for organized storage.",
  price: " ₦280,000",
  image: wardrobe1,
  category: "Wardrobe",
},
{
  name: "Blue & Concrete Wardrobe with Wooden Accents",
  description: "A contemporary wardrobe design combining matte blue and concrete-finish panels with warm wood trims. Includes multiple storage sections, drawers, and a side nook — ideal for modern bedrooms with a calm aesthetic.",
  price: " ₦550,000",
  image: wardrobe5,
  category: "Wardrobes & Dressing Units",
},
{
  name: "Dark Walnut Modular Wardrobe",
  description: "A full-height wardrobe in dark walnut laminate featuring multiple hanging sections, four deep drawers, and overhead cabinets for maximum storage. Sleek stainless handles and soft-close hinges make it ideal for modern bedrooms.",
  price: " ₦450,000",
  image: wardrobe7,
  category: "Wardrobes & Dressing Units",
},
{
  name: "Classic Wooden Wardrobe with Drawers",
  description: "Spacious wooden wardrobe featuring a natural oak finish, sleek silver handles, and multiple compartments with lower drawers for extra storage. Perfect for organizing clothing and accessories in style.",
  price: "₦300,000",
  image: wardrobe8,
  category: "Bedroom",
},
{
  name: "White Wardrobe with Open Shelves",
  description: "A tall modern wardrobe with a clean white finish, featuring double doors, lower drawers, and open center shelving for display or easy access. Perfect for bedrooms needing both storage and style.",
  price: "₦550,000",
  image: wardrobe9,
  category: "Wardrobe",
},
{
  name: "Marble Finish Wardrobe",
  description: "A two-door wardrobe with a sleek marble finish and elegant silver handles. It includes lower drawers and open compartments for versatile storage, blending luxury with practicality.",
  price: "₦200,000",
  image: wardrobe10,
  category: "Wardrobe",
},






  ];

  const diningProducts = [
    {
      
     name: "Luxury Marble Dining Table Set with Velvet Chairs",
     description: "Elegant rectangular marble-top dining table with six plush velvet chairs, featuring gold metal legs and a modern black and gray finish for a sophisticated dining experience.",
     price: " ₦450,000",
      image: diningtable1,
      category: "Dining Room",
},

    {
  name: "Luxury Marble Dining Table Set with Velvet Chairs",
  description: "Elegant rectangular marble-top dining table with six plush velvet chairs, featuring gold metal legs and a modern black and gray finish for a sophisticated dining experience.",
  price: "₦500,000",
  image: dining1,
  category: "Dining Room",
},

    {
  name: "Modern 4-Seater Dining Table Set with Quilted Chairs",
  description: "Contemporary white-top dining table with four elegant quilted chairs featuring soft beige upholstery, wooden legs, and gold-tipped accents for a modern dining experience.",
  price: "₦220,000",
  image: dining2,
  category: "Dining Room",
},
{
  name: "Elegant Black Marble Dining Table Set with Six Chairs",
  description: "Sleek rectangular black marble-top dining table paired with six plush velvet chairs in deep black, offering a luxurious and minimalist aesthetic for modern dining spaces.",
  price: "₦380,000",
  image: dining3,
  category: "Dining Room",
},


  ];

  const  kitchenProducts = [
    {
  name: "Modern L-Shaped Modular Kitchen Set",
  description: "Stylish L-shaped modular kitchen with sleek two-tone cabinetry, black granite countertop, built-in sink, and gas hob. Designed for efficiency and elegance in contemporary homes.",
  price: "₦500,000",
  image: kitchen1,
  category: "Kitchen",
},
{
  name: "Luxury White Gloss Modular Kitchen",
  description: "Premium white gloss modular kitchen with gold handles, marble countertops, and integrated gas hob. Features modern LED lighting and ample overhead storage, perfect for high-end interiors.",
  price: "₦800,000",
  image: kitchen2,
  category: "Kitchen",
},

   {
  name: "Modern Grey & Oak Kitchen Set",
  description: "A sleek modular kitchen featuring matte grey cabinetry with oak wood accents and countertop. Includes integrated gas hob, minimalist handles, and overhead storage with a built-in wine rack. Perfect for contemporary interiors.",
  price: "₦950,000",
  image: kitchen4,
  category: "Kitchen",
},
{
  name: "Light Oak Modular Kitchen Unit",
  description: "Compact kitchen cabinet set finished in light oak texture with a dark marble-effect countertop. Features upper wall cabinets with open shelving and lower cabinets with drawers for efficient storage. Ideal for apartments or small spaces.",
  price: "₦170,000",
  image: kitchen5,
  category: "Kitchen",
},
{
  name: "Classic Walnut Kitchen Cabinet Set",
  description: "Elegant kitchen cabinet set in a walnut wood finish with a sleek black countertop. Includes upper cabinets with dish rack inserts and lower units featuring multiple drawers and a built-in sink. A perfect blend of functionality and modern style.",
  price: "₦180,000",
  image: kitchen6,
  category: "Kitchen",
},
{
  name: "Modern Glossy White Kitchen with Gold Trim",
  description: "Sophisticated kitchen setup featuring high-gloss white cabinetry with elegant gold trim accents. Includes a black countertop, in-built gas hob, extractor hood, and tall storage units for a sleek, contemporary look.",
  price: "₦850,000",
  image: kitchen7,
  category: "Kitchen",
},
{
  name: "Compact L-Shaped White Kitchen",
  description: "A minimal and space-efficient L-shaped kitchen with clean white cabinets and a marble-look countertop. Upper cabinets provide added storage, while the design maximizes corner space for functionality in smaller areas.",
  price: "₦650,000",
  image: kitchen8,
  category: "Kitchen",
},



  ];

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

       {/* Living Room Collection */}
<section id="living-room" className="section-padding">
  <div className="container mx-auto">
    <h2 className="text-4xl font-playfair font-bold mb-8">Living Room Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {livingRoomProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
</section>

{/* Bedroom Collection */}
<section id="bedroom" className="section-padding bg-secondary">
  <div className="container mx-auto">
    <h2 className="text-4xl font-playfair font-bold mb-8">Bedroom Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {bedroomProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
</section>

{/* Dining Collection */}
<section id="dining" className="section-padding">
  <div className="container mx-auto">
    <h2 className="text-4xl font-playfair font-bold mb-8">Dining Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {diningProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
</section>

{/* Kitchen Collection */}
<section id="kitchen" className="section-padding bg-secondary">
  <div className="container mx-auto">
    <h2 className="text-4xl font-playfair font-bold mb-8">Kitchen Collection</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {kitchenProducts.map((product, index) => (
        <ProductCard key={index} {...product} />
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
