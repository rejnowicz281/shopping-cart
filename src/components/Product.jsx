import PropTypes from "prop-types";
import { useState } from "react";
import QuantityUpdater from "./QuantityUpdater";

export default function Product({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="Product">
            <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.name} />
            </div>
            <div className="product-main">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <QuantityUpdater quantity={quantity} updateQuantity={setQuantity} />
                <button className="add-to-cart-button" onClick={() => addToCart(product, quantity)}>
                    Add to cart (${product.price * quantity})
                </button>
            </div>
        </div>
    );
}

Product.propTypes = {
    addToCart: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
