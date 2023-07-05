import PropTypes from "prop-types";
import { useState } from "react";
import QuantityUpdater from "./QuantityUpdater";

export default function Product({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="Product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <QuantityUpdater quantity={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            <button onClick={() => addToCart(product, quantity)}>Add to cart (${product.price * quantity})</button>
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
    }).isRequired,
};
