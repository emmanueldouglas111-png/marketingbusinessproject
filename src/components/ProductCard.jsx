import { useCart } from "../CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-price">
          ₦{Number(product.price).toLocaleString()}
        </div>

        <button
          className="add-cart"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductCard;