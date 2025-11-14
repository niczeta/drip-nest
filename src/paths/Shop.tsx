import { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { Product } from "./Cart";
import { ShoppingCart, Zap } from "lucide-react";
import { Button } from "../components/Button";

// La lista prodotti di base (senza quantità)
const baseProducts: Omit<Product, "quantity">[] = [
  {
    id: 1,
    name: "Jordan 1 Retro High Chicago L&F",
    price: "$ 1999.90",
    image: "/shop/j-red.webp",
  },
  {
    id: 2,
    name: "Jordan 1 High Lucky Green",
    price: "$ 1999.90",
    image: "/shop/j-green.webp",
  },
  {
    id: 3,
    name: "Jordan 1 Retro High Rookie of the Year",
    price: "$ 1999.90",
    image: "/shop/j-rookie.webp",
  },
  {
    id: 4,
    name: "Jordan 1 Retro High Tie Dye",
    price: "$ 1999.90",
    image: "/shop/j-cyan.webp",
  },
  {
    id: 5,
    name: "Jordan 1 Retro High OG Osbidian UNC 2019",
    price: "$ 1999.90",
    image: "/shop/j-blue.webp",
  },
  {
    id: 6,
    name: "Jordan 1 Retro High OG 85 Black White",
    price: "$ 1999.90",
    image: "/shop/j-black.webp",
  },
  {
    id: 7,
    name: "Jordan 1 Retro High Fearless OG",
    price: "$ 1999.90",
    image: "/shop/j-fearless.webp",
  },
  {
    id: 8,
    name: "Jordan 1 Retro High OG Yellow Toe",
    price: "$ 1999.90",
    image: "/shop/j-yellow.webp",
  },
];

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Carica i prodotti e unisce quantità da localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const cart: Product[] = storedCart ? JSON.parse(storedCart) : [];

    const enrichedProducts: Product[] = baseProducts.map((p) => {
      const match = cart.find((c) => c.id === p.id);
      return { ...p, quantity: match?.quantity ?? 0 };
    });

    setProducts(enrichedProducts);
  }, []);

  // Aggiorna prodotti + localStorage al cambio quantità
  const handleQuantityChange = (updatedProduct: Product): void => {
    const updatedList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedList);

    const updatedCart = updatedList.filter((p) => p.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {/* Hero section */}
      <section className="bg-neutral-900 text-white py-16 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={24} className="text-red-500" />
            <span className="text-red-500 font-semibold uppercase">Shop</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Curated Sneaker Collection
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Explore our hand-picked selection of premium Jordan 1s and exclusive kicks. Find your next favorite pair.
          </p>
        </div>
      </section>

      {/* Shop grid section */}
      <section className="min-h-screen bg-neutral-950 text-white px-4 pt-16 pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ShopCard
                key={product.id}
                product={product}
                quantity={product.quantity}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>

          {/* CTA section */}
          <div className="flex justify-center mt-16">
            <Button
              label="Go to Cart"
              link="/cart"
              icon={<ShoppingCart size={20} />}
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
