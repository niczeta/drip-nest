import { useEffect, useState } from "react";
import { CartCard } from "../components/CartCard";
import { Footer } from "../components/Footer";
import { ActionButton } from "../components/ActionButton";
import { ArrowLeft, ShoppingCart } from "lucide-react";

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cart
      .map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);
    updateLocalStorage(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    updateLocalStorage(updatedCart);
  };

  const getTotal = () => {
    return cart
      .reduce((total, product) => {
        const price = parseFloat(product.price.replace("$", "").replace(",", ""));
        return total + price * product.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <>
      <section className="flex flex-col items-center min-h-screen bg-neutral-950 text-white px-6 py-16">
        <div className="w-full max-w-6xl">
          {cart.length > 0 ? (
            <>
              <h1 className="text-3xl font-semibold mt-12 mb-8">Your Shopping Cart</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {cart.map((product) => (
                    <CartCard
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      quantity={product.quantity}
                      onIncrease={() => increaseQuantity(product.id)}
                      onDecrease={() => decreaseQuantity(product.id)}
                      onRemove={() => removeProduct(product.id)}
                    />
                  ))}
                </div>

                <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg h-fit">
                  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                  <div className="flex justify-between mb-4">
                    <span>Total</span>
                    <span className="font-bold text-xl">$ {getTotal()}</span>
                  </div>
                  <ActionButton
                    label="Checkout"
                    link="/checkout"
                    icon={<ShoppingCart size={20} />}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center mt-60 h-full">
              <div className="text-center text-xl opacity-70 mb-6">
                Your cart is empty.
              </div>
              <div className="mt-6">
                <ActionButton
                  label="Return to Shop"
                  link="/shop"
                  icon={<ArrowLeft size={20} />}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
