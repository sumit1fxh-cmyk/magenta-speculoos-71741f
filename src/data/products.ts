export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Obsidian Peak Blazer',
    image: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=MASTERPIECE+BLAZER&font=montserrat',
    description:
      'Crafted from the rarest 100% Vicuña wool sourced from the Andes, the Obsidian Peak Blazer features hand-sewn 24k gold buttons and a bespoke satin lining embroidered with the EZABLACK monogram. Worn by Timothée Chalamet at the Cannes Film Festival. Each piece requires 120 hours of artisan craftsmanship.',
    shortDescription: '100% Vicuña wool with 24k gold buttons. Worn by Timothée Chalamet.',
    price: 12800,
  },
  {
    id: 2,
    name: 'Gilded Moto Jacket',
    image: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=GOLD+LEATHER+JACKET&font=montserrat',
    description:
      'Hand-finished in Florence from the finest nappa lambskin, the Gilded Moto Jacket is adorned with genuine 22k gold leaf detailing along the seams and lapels. Originally created as a one-of-one exclusive for Naomi Campbell, this expanded limited edition retains all the drama of the original.',
    shortDescription: 'Italian lambskin with gold leaf detailing. Naomi Campbell exclusive.',
    price: 19500,
  },
  {
    id: 3,
    name: 'Midnight Empress Gown',
    image: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=SILK+GOWN+CRYSTAL&font=montserrat',
    description:
      'The Midnight Empress Gown is a masterwork of couture — 4,200 hand-placed Swarovski crystals cascade across duchess satin in a gradient inspired by the Mumbai skyline at night. Seen on Zendaya at the Academy Awards red carpet. Arrives with a certificate of authenticity and a custom garment archive box.',
    shortDescription: 'Hand-embroidered Swarovski crystals on duchess satin. Oscars red carpet.',
    price: 28700,
  },
  {
    id: 4,
    name: 'Royal Velvet Tuxedo',
    image: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=CRICKET+VELVET+SUIT&font=montserrat',
    description:
      "The Royal Velvet Tuxedo was first designed as a personal commission for Virat Kohli for the ICC Awards night. Midnight-blue velvet with hand-rolled satin lapels and a silk moiré lining, the suit stands as EZABLACK's most requested archival piece. Now offered in an ultra-limited run of 12.",
    shortDescription: "Virat Kohli's match-day favorite — midnight velvet and satin lapels.",
    price: 14200,
  },
]

export default products
