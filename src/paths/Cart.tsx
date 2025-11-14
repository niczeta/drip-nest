import { useEffect, useState } from "react";
import { CartCard } from "../components/CartCard";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "../components/Button";

export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart changes
  const updateLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  // Increase quantity for a product
  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateLocalStorage(updatedCart);
  };

  // Decrease quantity for a product, remove if reaches 0
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

  // Remove product from cart completely
  const removeProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    updateLocalStorage(updatedCart);
  };

  // Calculate total price of all items in cart
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
              {/* Cart title */}
              <h1 className="text-3xl font-semibold mt-12 mb-8">Your Shopping Cart</h1>
              
              {/* Main cart layout: items on left, summary on right */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart items list */}
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

                {/* Order summary sidebar */}
                <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg h-fit">
                  <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                  
                  {/* Total price display */}
                  <div className="flex justify-between mb-6 pb-6 border-b border-neutral-700">
                    <span className="text-lg">Total</span>
                    <span className="font-bold text-2xl text-red-400">$ {getTotal()}</span>
                  </div>
                  
                  {/* Checkout button using Button component */}
                  <Button
                    label="Checkout"
                    link="/checkout"
                    icon={<ShoppingCart size={20} />}
                    variant="primary"
                    size="md"
                    fullWidth
                  />
                </div>
              </div>
            </>
          ) : (
            // Empty cart state
            <div className="flex flex-col justify-center items-center mt-60 h-full">
              <div className="text-center text-xl opacity-70 mb-6">
                Your cart is empty.
              </div>
              <div className="mt-6">
                <Button
                  label="Return to Shop"
                  link="/shop"
                  icon={<ArrowLeft size={20} />}
                  variant="primary"
                  size="md"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
