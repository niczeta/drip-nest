import { useEffect, useState } from "react";
import { ShopCard } from "../components/ShopCard";
import { Footer } from "../components/Footer";
import { Product } from "./Cart";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { ShoppingCart } from "lucide-react";

// La lista prodotti di base (senza quantità)
const baseProducts: Omit<Product, "quantity">[] = [
  {
    id: 1,
    name: "Jordan 1 Retro High Chicago L&F",
    price: "$ 1999.90",
    image: "/public/j-red.webp",
  },
  {
    id: 2,
    name: "Jordan 1 High Lucky Green",
    price: "$ 1999.90",
    image: "/public/j-green.webp",
  },
  {
    id: 3,
    name: "Jordan 1 Retro High Rookie of the Year",
    price: "$ 1999.90",
    image: "/public/j-rookie.webp",
  },
  {
    id: 4,
    name: "Jordan 1 Retro High Tie Dye",
    price: "$ 1999.90",
    image: "/public/j-cyan.webp",
  },
  {
    id: 5,
    name: "Jordan 1 Retro High OG Osbidian UNC 2019",
    price: "$ 1999.90",
    image: "/public/j-blue.webp",
  },
  {
    id: 6,
    name: "Jordan 1 Retro High OG 85 Black White",
    price: "$ 1999.90",
    image: "/public/j-black.webp",
  },
  {
    id: 7,
    name: "Jordan 1 Retro High Fearless OG",
    price: "$ 1999.90",
    image: "/public/j-fearless.webp",
  },
  {
    id: 8,
    name: "Jordan 1 Retro High OG Yellow Toe",
    price: "$ 1999.90",
    image: "/public/j-yellow.webp",
  },
];

export const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

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
  const handleQuantityChange = (updatedProduct: Product) => {
    const updatedList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedList);

    const updatedCart = updatedList.filter((p) => p.quantity > 0);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleGoToCart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/cart");
  };

  return (
    <>
      <section className="min-h-screen bg-neutral-950 text-white px-8 pt-28 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ShopCard
              key={product.id}
              product={product}
              quantity={product.quantity}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <ActionButton
            label="Go to cart"
            link="/cart"
            icon={<ShoppingCart size={20} />}
            onClick={handleGoToCart}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};
