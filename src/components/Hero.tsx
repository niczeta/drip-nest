import { Button } from "../components/Button";
import { ShoppingBag } from "lucide-react";

export const Hero = () => {
  return (
    // Hero section with video background, overlay, content and CTA
    <section className="relative h-screen w-full overflow-hidden" aria-label="Homepage hero">
      {/* Decorative video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        poster="/fallback.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>

      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Main content, fade-in effect for entrance */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase drop-shadow">
          Welcome to Drip-Nest
        </h1>
        <p className="text-2xl md:text-3xl uppercase mb-8">
          Your trusted online sneaker boutique
        </p>
        
        {/* CTA button using Button component */}
        <Button
          label="Shop Now"
          link="/shop"
          icon={<ShoppingBag size={20} />}
          variant="primary"
          size="lg"
        />
      </div>
    </section>
  );
};
