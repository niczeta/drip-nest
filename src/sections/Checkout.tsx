import { useEffect, useState } from "react";
import { Loader2, CheckCircle, Home } from "lucide-react";
import { Button } from "../components/Button";

export const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(true);

  // Simulate payment processing for 3 seconds, then clear cart
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      localStorage.removeItem("cart"); // Clear the cart after purchase
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center px-4 py-20">
        {isProcessing ? (
          // Payment processing state
          <div className="flex flex-col items-center gap-6">
            <Loader2 className="animate-spin text-red-500" size={64} />
            <h2 className="text-2xl font-semibold">Processing Payment...</h2>
            <p className="text-neutral-400 text-center max-w-md">
              Please wait a few seconds while we process your order.
            </p>
          </div>
        ) : (
          // Success state
          <div className="flex flex-col items-center gap-6 text-center">
            <CheckCircle size={64} className="text-green-500" />
            <h2 className="text-3xl font-bold">Thank you for your order!</h2>
            
            {/* Success message */}
            <div className="space-y-2">
              <p className="text-neutral-400 max-w-md">
                Your payment was successfully processed.
              </p>
              <p className="text-neutral-400 max-w-md">
                You will receive a confirmation via email.
              </p>
            </div>
            
            {/* Return to home button using Button component */}
            <div className="mt-4">
              <Button
                label="Return to Home"
                link="/"
                icon={<Home size={20} />}
                variant="primary"
                size="md"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};
