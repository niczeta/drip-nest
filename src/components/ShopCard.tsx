import { Product } from "../paths/Cart";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

type ShopCardProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (updatedProduct: Product) => void;
};

// Product card component displaying item details and cart management controls
export const ShopCard = ({ product, quantity, onQuantityChange }: ShopCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Handle initial add to cart action
  const handleAddClick = () => {
    if (quantity === 0) {
      onQuantityChange({ ...product, quantity: 1 });
    }
  };

  // Increment product quantity in cart
  const increment = () => {
    onQuantityChange({ ...product, quantity: quantity + 1 });
  };

  // Decrement product quantity, allows removal when reaching 0
  const decrement = () => {
    if (quantity > 0) {
      onQuantityChange({ ...product, quantity: quantity - 1 });
    }
  };

  return (
    // Main card container
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Product image section */}
      <div className="relative h-72 overflow-hidden bg-neutral-800">
        <img
          src={product.image}
          alt={`Image of ${product.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Top badges */}
        <div className="absolute top-3 right-3 flex gap-2">
          {/* Star rating */}
          <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white font-semibold">4.9</span>
          </div>
          
          {/* Favorite button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 rounded-full transition-all"
            aria-label="Add to favorites"
          >
            <Heart
              size={16}
              className={isFavorite ? "text-red-500 fill-red-500" : "text-white"}
            />
          </button>
        </div>

        {/* Bottom left tag */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            Trending
          </span>
        </div>
      </div>

      {/* Product content section */}
      <div className="p-4 flex flex-col gap-2.5 flex-grow">
        {/* Product name */}
        <h3 className="text-sm font-bold line-clamp-2 text-white">
          {product.name}
        </h3>

        {/* Product price - clean style */}
        <div className="flex items-end gap-1">
          <span className="text-2xl font-black text-red-400">{product.price}</span>
          <span className="text-xs text-neutral-500 mb-0.5">USD</span>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Cart action area - fixed height container */}
        <div className="h-11">
          {quantity === 0 ? (
            <Button
              label="Add to Cart"
              link="#"
              onClick={handleAddClick}
              variant="primary"
              size="md"
              fullWidth
            />
          ) : (
            /* Compact quantity selector */
            <div className="flex items-center justify-between gap-2 h-full">
              <button
                onClick={decrement}
                className="h-11 w-11 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 text-white rounded border border-neutral-700 transition-colors text-sm font-bold"
                aria-label={`Decrease ${product.name} quantity`}
              >
                −
              </button>
              <div className="flex-1 text-center">
                <p className="text-white font-bold text-base">{quantity} in cart</p>
              </div>
              <button
                onClick={increment}
                className="h-11 w-11 flex items-center justify-center bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded border border-red-600/40 transition-colors text-sm font-bold"
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
