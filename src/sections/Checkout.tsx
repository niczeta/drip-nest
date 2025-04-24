import { useEffect, useState } from "react";
import { Loader2, CheckCircle, Home } from "lucide-react";
import { ActionButton } from "../components/ActionButton";
import { Footer } from "../components/Footer";

export const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      localStorage.removeItem("cart"); // Clear the cart after purchase
    }, 3000); // Simulate payment processing

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center px-4 py-20">
        {isProcessing ? (
          <div className="flex flex-col items-center gap-6">
            <Loader2 className="animate-spin text-red-500" size={64} />
            <h2 className="text-2xl font-semibold">Processing Payment...</h2>
            <p className="text-neutral-400">Please wait a few seconds while we process your order.</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            <CheckCircle size={64} className="text-green-500" />
            <h2 className="text-3xl font-bold">Thank you for your order!</h2>
            <div>
              <p className="text-neutral-400 max-w-md">
                Your payment was successfully processed.
              </p>
              <p className="text-neutral-400 max-w-md">
                You will receive a confirmation via email.
              </p>
            </div>
            <ActionButton label="Return to Home" link="/" icon={<Home size={20} />} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};
