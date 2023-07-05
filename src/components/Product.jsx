import PropTypes from "prop-types";
import { useState } from "react";
import QuantityUpdater from "./QuantityUpdater";

export default function Product({ product, addToCart }) {
    const [quantity, setQuantity] = useState(1);

    function onSubmit(e) {
        e.preventDefault();
        addToCart(product, quantity);
    }

    return (
        <div className="Product">
            <form onSubmit={onSubmit}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <QuantityUpdater quantity={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                <button type="submit">Add to cart (${product.price * quantity})</button>
            </form>
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
