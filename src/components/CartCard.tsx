import { Minus, Plus, Trash2 } from "lucide-react";

type CartCardProps = {
  name: string;
  price: string;
  image: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

// Cart item card displaying product details and quantity controls
export const CartCard = ({
  name,
  price,
  image,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartCardProps) => (
  <li className="flex flex-col sm:flex-row items-center sm:items-start justify-between py-6 px-4 bg-neutral-800 rounded-lg shadow-lg gap-4">
    {/* Product image section */}
    <img
      src={image}
      alt={name}
      className="w-full sm:w-60 h-40 object-cover rounded-md"
    />

    {/* Product details section */}
    <div className="flex-1 w-full sm:w-auto space-y-3 text-center sm:text-left">
      {/* Product name */}
      <div className="text-xl font-semibold">{name}</div>
      
      {/* Price display */}
      <div className="inline-flex items-baseline gap-2 bg-red-900/30 px-3 py-2 rounded-lg sm:w-fit">
        <span className="text-sm text-neutral-400">Price</span>
        <span className="text-lg font-bold text-red-400">{price}</span>
      </div>
      
      {/* Quantity display */}
      <div className="text-sm text-gray-300">
        Quantity: <span className="font-bold text-white">{quantity}</span>
      </div>
    </div>

    {/* Action controls section */}
    <div className="flex flex-col items-center sm:items-end gap-3">
      {/* Quantity increment/decrement buttons */}
      <div className="flex gap-2 items-center justify-center">
        <button
          onClick={onDecrease}
          disabled={quantity <= 1}
          className={`text-white size-10 rounded flex items-center justify-center transition-colors ${
            quantity <= 1
              ? "bg-neutral-600 cursor-not-allowed opacity-50"
              : "bg-red-600 hover:bg-red-700"
          }`}
          aria-label="Decrease quantity"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={onIncrease}
          className="bg-red-600 hover:bg-red-700 text-white size-10 rounded flex items-center justify-center transition-colors"
          aria-label="Increase quantity"
        >
          <Plus size={18} />
        </button>
      </div>
      
      {/* Remove product button */}
      <button
        onClick={onRemove}
        className="flex items-center gap-2 px-3 py-1 text-red-500 hover:text-red-700 hover:bg-red-900/20 rounded transition-colors text-xs font-semibold"
        aria-label="Remove product from cart"
      >
        <Trash2 size={14} />
        Remove
      </button>
    </div>
  </li>
);
