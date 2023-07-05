import PropTypes from "prop-types";

export default function QuantityUpdater({ quantity, updateQuantity }) {
    function handleUpdate(value) {
        if (value >= 1) {
            updateQuantity(parseInt(value));
        } else {
            updateQuantity(1);
        }
    }

    return (
        <div className="QuantityUpdater">
            <button className="quantity-button" onClick={() => handleUpdate(quantity - 1)}>
                -
            </button>
            <input type="number" id="quantity" value={quantity} onChange={(e) => handleUpdate(e.target.value)} />
            <button className="quantity-button" onClick={() => handleUpdate(quantity + 1)}>
                +
            </button>
        </div>
    );
}

QuantityUpdater.propTypes = {
    quantity: PropTypes.number.isRequired,
    updateQuantity: PropTypes.func.isRequired,
};
