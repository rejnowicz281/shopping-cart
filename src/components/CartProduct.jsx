import PropTypes from "prop-types";
import QuantityUpdater from "./QuantityUpdater";

export default function CartProduct({ product, updateCartProductQuantity, discardProduct }) {
    function updateQuantity(e) {
        updateCartProductQuantity(product.id, parseInt(e.target.value));
    }

    return (
        <div className="CartProduct">
            <h2>{product.name}</h2>
            <label htmlFor="quantity">Quantity:</label>
            <QuantityUpdater quantity={product.quantity} onChange={updateQuantity} />
            <p>Price: ${product.price * product.quantity}</p>
            <button onClick={() => discardProduct(product.id)}>Discard Product</button>
        </div>
    );
}

CartProduct.propTypes = {
    updateCartProductQuantity: PropTypes.func.isRequired,
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    discardProduct: PropTypes.func.isRequired,
};
