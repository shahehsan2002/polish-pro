import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from "../../redux/features/cartSlice";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from URL parameters
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.find((p) => p.id === id));
  const cartItems = useAppSelector((state) => state.cart.items);

  if (!product) {
    return <div>Loading...</div>;
  }

  const cartProduct = cartItems.find((item) => item.id === product.id);
  const currentQuantity = cartProduct ? cartProduct.quantity : 0;
  const isOutOfStock = currentQuantity >= product.stock;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 h-auto" />
        <div className="ml-8">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">Price: {product.price}</p>
          <p className="mb-6">{product.description}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">Stock: {product.stock}</p>
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl ${
              isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
