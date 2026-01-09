export interface FurnitureItem {
  id: number;
  name: string;
  category: 'chair' | 'table' | 'armchair' | 'bed' | 'lamp';
  price: number;
  description: string;
  imageUrl: string;
}

export const furnitureData: FurnitureItem[] = [
  // CHAIRS
  {
    id: 1,
    name: "Nordic Oak Dining Chair",
    category: "chair",
    price: 145,
    description: "A minimalist solid oak chair with a curved backrest for ergonomic support.",
    imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Velvet Shell Accent Chair",
    category: "chair",
    price: 210,
    description: "Features gold-finished legs and a soft velvet upholstery in dusty rose.",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Industrial Matte Black Stool",
    category: "chair",
    price: 85,
    description: "Stackable metal stool with a powder-coated finish, perfect for kitchen islands.",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800"
  },

  // TABLES
  {
    id: 4,
    name: "Reclaimed Wood Coffee Table",
    category: "table",
    price: 320,
    description: "Handcrafted from sustainable timber with a heavy-duty steel X-frame base.",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Marble Top Bistro Table",
    category: "table",
    price: 450,
    description: "A round Carrara marble top paired with a weighted brass pedestal base.",
    imageUrl: "https://images.unsplash.com/photo-1567016520496-0cb37d8467a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Minimalist Glass Desk",
    category: "table",
    price: 275,
    description: "Tempered glass work surface with a sleek white aluminum trestle frame.",
    imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800"
  },

  // ARMCHAIRS
  {
    id: 7,
    name: "Mid-Century Leather Lounge",
    category: "armchair",
    price: 890,
    description: "Premium top-grain leather armchair with walnut-stained wooden arms.",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d31709404285?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Emerald Tufted Wingback",
    category: "armchair",
    price: 560,
    description: "Elegant high-back armchair featuring deep button tufting and velvet fabric.",
    imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Cozy Bouclé Reading Chair",
    category: "armchair",
    price: 425,
    description: "Features a trendy teddy fabric texture and a deep, comfortable seat.",
    imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800"
  },

  // BEDS
  {
    id: 10,
    name: "Floating Platform Bed Frame",
    category: "bed",
    price: 1100,
    description: "Modern low-profile design in walnut wood, giving the illusion of floating.",
    imageUrl: "https://images.unsplash.com/photo-1505693419173-42b925886275?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Upholstered Linen Queen Bed",
    category: "bed",
    price: 750,
    description: "Soft grey linen headboard with a sturdy slatted base and wooden legs.",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "Black Iron Canopy Bed",
    category: "bed",
    price: 920,
    description: "Industrial-style four-poster bed with a sleek iron silhouette.",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
  },

  // LAMPS
  {
    id: 13,
    name: "Brushed Gold Floor Lamp",
    category: "lamp",
    price: 180,
    description: "An arched floor lamp with a marble base, ideal for reading nooks.",
    imageUrl: "https://images.unsplash.com/photo-1507473884658-c70b655952d2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    name: "Geometric Ceramic Table Lamp",
    category: "lamp",
    price: 95,
    description: "Textured white ceramic base with a neutral linen drum lampshade.",
    imageUrl: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    name: "Modern Glass Pendant Light",
    category: "lamp",
    price: 130,
    description: "Hand-blown amber glass shade with vintage-style Edison bulb compatibility.",
    imageUrl: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800"
  }
];