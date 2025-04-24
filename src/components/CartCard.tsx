import { Minus, Plus } from "lucide-react";

type CartCardProps = {
  name: string;
  price: string;
  image: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

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
    <img
      src={image}
      alt={name}
      className="w-full sm:w-60 h-40 object-cover rounded-md"
    />

    <div className="flex-1 w-full sm:w-auto space-y-2 text-center sm:text-left">
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm text-gray-300">
        Price: <span className="font-bold">{price}</span>
      </div>
      <div className="text-sm text-gray-300">
        Quantity: <span className="font-bold">{quantity}</span>
      </div>
    </div>

    <div className="flex flex-col gap-4 sm:mr-12 sm:self-center">
      <div className="flex gap-2 items-center">
        <button
          onClick={onDecrease}
          className="bg-red-600 hover:bg-red-500 text-white size-8 rounded flex items-center justify-center"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={onIncrease}
          className="bg-green-600 hover:bg-green-500 text-white size-8 rounded flex items-center justify-center"
        >
          <Plus size={16} />
        </button>
      </div>
      <button
        onClick={onRemove}
        className="text-red-500 hover:text-red-700 text-sm"
      >
        Remove
      </button>
    </div>
  </li>
);
