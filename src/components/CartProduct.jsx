import PropTypes from "prop-types";
import QuantityUpdater from "./QuantityUpdater";

export default function CartProduct({ product, updateCartProductQuantity, discardProduct }) {
    function updateQuantity(value) {
        updateCartProductQuantity(product.id, value);
    }

    return (
        <div className="CartProduct">
            <img className="CartProduct-image" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <QuantityUpdater quantity={product.quantity} updateQuantity={updateQuantity} />
            <p>Price: ${product.price * product.quantity}</p>
            <button className="discard-button" onClick={() => discardProduct(product.id)}>
                Discard Product
            </button>
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
        image: PropTypes.string.isRequired,
    }).isRequired,
    discardProduct: PropTypes.func.isRequired,
};
