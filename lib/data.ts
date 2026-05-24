export const SITE = {
  name: "De Office Bar",
  tagline: "Port Harcourt's Premier Bar & Lounge",
  rating: 4.1,
  reviews: 1023,
  priceRange: "₦4,000 – ₦16,000",
  phone: "0806 193 9718",
  address: "Phase 2, 8 Tombia Street, Rivers G.R.A, Port Harcourt, Rivers State",
  plusCode: "R2F4+43 Port Harcourt",
  hours: {
    weekdays: "2:00 PM – 2:00 AM",
    weekends: "2:00 PM – 3:00 AM",
    note: "Opens 2 PM daily",
  },
  services: ["Dine-in", "Takeaway"],
  mapsUrl: "https://maps.google.com/?q=De+Office+Bar+Tombia+Street+Port+Harcourt",
  instagram: "#",
  facebook: "#",
  whatsapp: "2348061939718",
};

export type MenuItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export const MENU_ITEMS: MenuItem[] = [
  // Food
  {
    id: 1,
    name: "Chicken, Chips & Dips with Salad",
    category: "food",
    description: "Crispy fried chicken served with seasoned fries, signature dipping sauces, and fresh garden salad.",
    price: "₦5,500",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop",
    tag: "Signature",
  },
  {
    id: 2,
    name: "Peppered Grilled Fish",
    category: "food",
    description: "Whole tilapia grilled in our house pepper sauce with fried plantain and native salad.",
    price: "₦7,000",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Suya Platter",
    category: "food",
    description: "Skewered spiced beef suya with sliced onions, tomatoes and yaji spice, served piping hot.",
    price: "₦4,500",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    id: 4,
    name: "Peppered Snail & Prawns",
    category: "food",
    description: "Giant snails and king prawns slow-cooked in rich peppered tomato sauce. A bar classic.",
    price: "₦8,500",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Wings Bucket (10 pcs)",
    category: "food",
    description: "10 pieces of crispy chicken wings tossed in BBQ or hot pepper sauce with blue cheese dip.",
    price: "₦6,000",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Office Burger",
    category: "food",
    description: "Double beef patty with caramelised onions, cheddar, lettuce, tomato and house sauce.",
    price: "₦5,000",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
  },
  // Drinks
  {
    id: 7,
    name: "Hennessy VS",
    category: "spirits",
    description: "Premium French cognac served neat, on the rocks, or mixed. Per bottle.",
    price: "₦16,000",
    image: "https://images.unsplash.com/photo-1568644396922-5c3bfae12521?w=600&auto=format&fit=crop",
    tag: "Premium",
  },
  {
    id: 8,
    name: "Whisky on the Rocks",
    category: "spirits",
    description: "Johnnie Walker Black Label over premium ice. Smooth and refined.",
    price: "₦4,500",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Signature Cocktails",
    category: "cocktails",
    description: "Ask the bartender for tonight's specials — mojitos, margaritas, Aperol spritz, and more.",
    price: "From ₦4,000",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    id: 10,
    name: "Craft Beer Selection",
    category: "beer",
    description: "Rotating taps of local and imported craft beers. Ask your server for today's selections.",
    price: "From ₦2,500",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Red & White Wines",
    category: "wine",
    description: "Curated wine list featuring South African, French, and Italian varietals by glass or bottle.",
    price: "From ₦5,000",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Fresh Fruit Cocktail",
    category: "cocktails",
    description: "Handmade with seasonal fruits, fresh herbs and premium spirits. Vibrant and refreshing.",
    price: "₦4,000",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop",
  },
];

export const REVIEWS = [
  { name: "Chidi Okafor", rating: 5, text: "De Office Bar is the spot in PH! The ambiance is unmatched, music is always right, and the peppered snails are absolutely elite. We come here every Friday.", location: "Port Harcourt", initials: "CO", color: "#c9943a" },
  { name: "Amaka Eze", rating: 5, text: "Brought my team here for our quarterly dinner and everyone loved it. Great food, attentive staff, and the cocktails are some of the best I've had in Rivers State.", location: "GRA, Port Harcourt", initials: "AE", color: "#e05c3a" },
  { name: "Tunde Bello", rating: 4, text: "Solid bar with great vibes. The suya platter is a must. Gets busy on weekends so arrive early. The chicken and chips with dips — absolutely worth it.", location: "Port Harcourt", initials: "TB", color: "#3a8ac9" },
];
