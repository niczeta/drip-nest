import { Product } from "../sections/Cart";

type ShopCardProps = {
  product: Product;
  quantity: number;
  onQuantityChange: (updatedProduct: Product) => void;
};

export const ShopCard = ({ product, quantity, onQuantityChange }: ShopCardProps) => {
  const handleAddClick = () => {
    if (quantity === 0) {
      onQuantityChange({ ...product, quantity: 1 });
    }
  };

  const increment = () => {
    onQuantityChange({ ...product, quantity: quantity + 1 });
  };

  const decrement = () => {
    const newQuantity = quantity - 1;
    onQuantityChange({ ...product, quantity: newQuantity });
  };

  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-red-500 font-bold">{product.price}</p>

        {/* Bottone + counter con stile migliorato */}
        {quantity === 0 ? (
          <button
            onClick={handleAddClick}
            className="mt-2 w-full py-3 bg-red-800 hover:bg-red-700 rounded-lg text-white text-base font-semibold uppercase transition-all"
          >
            Add to Cart
          </button>
        ) : (
          <div className="mt-2 flex flex-col items-center gap-2">
            <div className="flex w-full justify-center gap-4">
              <button
                disabled
                className="w-full py-3 bg-red-800 text-white rounded-lg text-base font-semibold uppercase cursor-default"
              >
                Added
              </button>
              <div className="flex items-center justify-center gap-3 bg-red-800 rounded-lg px-4 py-2 text-white">
                <button
                  onClick={decrement}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={increment}
                  className="text-xl font-bold hover:text-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
