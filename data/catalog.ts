import { ItemCategory, WorkspaceItem } from '@/types/workspace';
export { DURATION_OPTIONS, DELIVERY_AREAS } from '@/data/rental-options';

export const CATALOG_ITEMS: readonly WorkspaceItem[] = [
  {
    id: 'desk-standing-pro',
    name: 'Standing Desk Pro',
    category: 'desks',
    pricePerWeek: 650000,
    tag: 'Ergonomic',
    description: 'Motorized dual-motor sit-stand desk with bamboo finish surface.',
    specs: ['140x70 cm surface', 'Memory presets', '72-120 cm height'],
    ergonomicsScore: 35,
    zenScore: 20
  },
  {
    id: 'desk-compact-wood',
    name: 'Compact Wooden Desk',
    category: 'desks',
    pricePerWeek: 350000,
    tag: 'Compact',
    description: 'Sustainably sourced solid teak wood desk tailored for cozy villa nooks.',
    specs: ['110x60 cm surface', 'Natural teak grain', 'Cable pass-through'],
    ergonomicsScore: 20,
    zenScore: 35
  },
  {
    id: 'desk-executive-l',
    name: 'Executive L-Desk',
    category: 'desks',
    pricePerWeek: 950000,
    tag: 'Premium',
    description: 'Expansive corner desk setup designed for multitasking and power creators.',
    specs: ['160x120 cm L-shape', 'Integrated power strip', 'Heavy-duty steel base'],
    ergonomicsScore: 30,
    zenScore: 25
  },
  {
    id: 'chair-ergo-mesh',
    name: 'Ergo Mesh Chair',
    category: 'chairs',
    pricePerWeek: 550000,
    tag: 'Ergonomic',
    description: 'Breathable full mesh chair with dynamic lumbar support and 3D armrests.',
    specs: ['Dynamic lumbar', '3D adjustable armrests', 'Synchronous tilt'],
    ergonomicsScore: 40,
    zenScore: 15
  },
  {
    id: 'chair-rattan-lounge',
    name: 'Rattan Lounge Chair',
    category: 'chairs',
    pricePerWeek: 400000,
    tag: 'Boho Vibe',
    description: 'Handcrafted artisan Bali rattan frame with padded linen ergonomic cushion.',
    specs: ['Artisan rattan weave', 'High-density linen cushion', 'Island aesthetic'],
    ergonomicsScore: 20,
    zenScore: 45
  },
  {
    id: 'chair-classic-task',
    name: 'Classic Task Chair',
    category: 'chairs',
    pricePerWeek: 300000,
    tag: 'Minimalist',
    description: 'Streamlined task chair with high-resilience foam and smooth rolling casters.',
    specs: ['Contoured backrest', 'Pneumatic height lift', 'Compact footprint'],
    ergonomicsScore: 25,
    zenScore: 25
  },
  {
    id: 'monitor-24-ips',
    name: '24" FHD Monitor',
    category: 'monitors',
    pricePerWeek: 250000,
    tag: 'Compact',
    description: 'Full HD IPS panel with thin bezels and eye-saver low blue light mode.',
    specs: ['1920x1080 resolution', '75Hz refresh rate', 'HDMI & USB-C ready'],
    ergonomicsScore: 15,
    zenScore: 15
  },
  {
    id: 'monitor-27-4k',
    name: '27" 4K Pro Monitor',
    category: 'monitors',
    pricePerWeek: 450000,
    tag: 'Ultra HD',
    description: 'Crystal-clear 4K UHD display with 99% sRGB color accuracy for design & code.',
    specs: ['3840x2160 UHD', '65W USB-C PD hub', 'Height-adjustable stand'],
    ergonomicsScore: 25,
    zenScore: 20
  },
  {
    id: 'monitor-34-ultrawide',
    name: 'Ultrawide 34" Curved',
    category: 'monitors',
    pricePerWeek: 750000,
    tag: 'Panoramic',
    description: '1500R curved ultra-wide screen replacing dual monitors with seamless view.',
    specs: ['3440x1440 WQHD', '21:9 aspect ratio', 'Split-screen multitask'],
    ergonomicsScore: 30,
    zenScore: 25
  },
  {
    id: 'lamp-arc-desk',
    name: 'Arc Desk Lamp',
    category: 'lamps',
    pricePerWeek: 120000,
    tag: 'Warm Glow',
    description: 'Curved brass arc lamp casting soft warm ambiance for late evening coding.',
    specs: ['Warm 2700K LED', 'Dimmable rotary dial', 'Solid marble base'],
    ergonomicsScore: 15,
    zenScore: 35
  },
  {
    id: 'lamp-minimal-screenbar',
    name: 'Minimal LED ScreenBar',
    category: 'lamps',
    pricePerWeek: 150000,
    tag: 'Zero Glare',
    description: 'Monitor-mounted smart light bar illuminating desk surface with zero screen glare.',
    specs: ['Asymmetric optical path', 'Touch brightness control', 'USB powered'],
    ergonomicsScore: 25,
    zenScore: 20
  },
  {
    id: 'plant-monstera',
    name: 'Monstera Deliciosa',
    category: 'plants',
    pricePerWeek: 90000,
    tag: 'Tropical Zen',
    description: 'Lush tropical potted Monstera bringing Bali jungle energy to your workstation.',
    specs: ['Ceramic terrazzo pot', 'Air purifying foliage', 'Low-maintenance'],
    ergonomicsScore: 10,
    zenScore: 40
  },
  {
    id: 'plant-snake',
    name: 'Snake Plant Sansevieria',
    category: 'plants',
    pricePerWeek: 70000,
    tag: 'Air Purifier',
    description: 'Architectural vertical succulent renowned for oxygen production and resilience.',
    specs: ['Clay terracotta pot', 'Natural toxin filter', 'Indirect light lover'],
    ergonomicsScore: 10,
    zenScore: 35
  },
  {
    id: 'plant-succulent-set',
    name: 'Succulent Trio Set',
    category: 'plants',
    pricePerWeek: 50000,
    tag: 'Desk Buddy',
    description: 'Miniature trio of hearty succulents resting on a handcrafted bamboo tray.',
    specs: ['3 geometric pots', 'Zero-spill soil mix', 'Compact desk accent'],
    ergonomicsScore: 5,
    zenScore: 25
  },
  {
    id: 'extra-mech-keyboard',
    name: 'Mechanical Keyboard',
    category: 'extras',
    pricePerWeek: 180000,
    tag: 'Tactile',
    description: 'Wireless 75% mechanical keyboard with quiet tactile brown switches.',
    specs: ['Hot-swappable switches', 'PBT keycaps', 'Bluetooth & 2.4GHz'],
    ergonomicsScore: 25,
    zenScore: 15
  },
  {
    id: 'extra-ergo-mouse',
    name: 'Wireless Ergo Mouse',
    category: 'extras',
    pricePerWeek: 120000,
    tag: 'Precision',
    description: 'Ergonomic sculptured mouse supporting natural wrist posture over long sessions.',
    specs: ['Natural handshake angle', 'Precision optical sensor', 'Silent clicks'],
    ergonomicsScore: 30,
    zenScore: 10
  },
  {
    id: 'extra-laptop-stand',
    name: 'Aluminum Laptop Stand',
    category: 'extras',
    pricePerWeek: 950000,
    tag: 'Cooling Lift',
    description: 'Elevates laptop screen to eye level while optimizing thermal dissipation.',
    specs: ['Anodized aluminum alloy', 'Silicone anti-slip pads', 'Cable routing loop'],
    ergonomicsScore: 25,
    zenScore: 15
  },
  {
    id: 'extra-headphones',
    name: 'ANC Studio Headphones',
    category: 'extras',
    pricePerWeek: 220000,
    tag: 'Deep Focus',
    description: 'Over-ear active noise-canceling headphones to block villa pool sounds.',
    specs: ['Active noise cancelation', 'Memory foam ear cushions', '30-hour battery life'],
    ergonomicsScore: 15,
    zenScore: 30
  },
  {
    id: 'lifestyle-coffee-machine',
    name: 'Italian Espresso Machine',
    category: 'lifestyle',
    pricePerWeek: 150000,
    tag: 'Coffee Station',
    description: 'Compact 15-bar pump espresso maker with steam wand for morning flat whites.',
    specs: ['15-bar pressure', 'Stainless portafilter', 'Steam wand'],
    ergonomicsScore: 10,
    zenScore: 35
  },
  {
    id: 'lifestyle-surfboard',
    name: 'Bali Custom Surfboard',
    category: 'lifestyle',
    pricePerWeek: 120000,
    tag: 'Outdoor Gear',
    description: 'Hand-shaped epoxy 6ft8 funboard suited for Canggu and Uluwatu waves.',
    specs: ['FCS II fin system', 'Tail traction pad', 'Leash included'],
    ergonomicsScore: 5,
    zenScore: 50
  },
  {
    id: 'lifestyle-scooter',
    name: 'Honda Scoopy 125cc Scooter',
    category: 'lifestyle',
    pricePerWeek: 350000,
    tag: 'Outdoor Gear',
    description: 'Fuel-efficient island scooter with twin helmets and surf rack attached.',
    specs: ['125cc engine', 'Surfboard rack', 'Two sanitized helmets'],
    ergonomicsScore: 5,
    zenScore: 40
  },
  {
    id: 'lifestyle-bean-bag',
    name: 'Villa Poolside Bean Bag',
    category: 'lifestyle',
    pricePerWeek: 80000,
    tag: 'Relax Zone',
    description: 'Oversized weather-resistant bean bag for relaxing poolside reading sessions.',
    specs: ['Waterproof Oxford fabric', 'High-resilience foam beads', 'Side carry handle'],
    ergonomicsScore: 15,
    zenScore: 45
  },
  {
    id: 'lifestyle-tool-shelf',
    name: 'Bamboo Storage Shelf',
    category: 'lifestyle',
    pricePerWeek: 90000,
    tag: 'Garage Space',
    description: '3-tier natural bamboo rack for surf gear, helmets, and tech cases.',
    specs: ['Solid bamboo frame', '120 cm height', 'Moisture resistant'],
    ergonomicsScore: 10,
    zenScore: 25
  }
];

export const CATEGORY_TABS: readonly { id: ItemCategory; label: string }[] = [
  { id: 'chairs', label: 'Chairs' },
  { id: 'desks', label: 'Desks' },
  { id: 'monitors', label: 'Monitors' },
  { id: 'lamps', label: 'Lamps' },
  { id: 'plants', label: 'Plants' },
  { id: 'extras', label: 'Extras' },
  { id: 'lifestyle', label: 'Lifestyle' }
];
