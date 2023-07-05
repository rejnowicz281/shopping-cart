import PropTypes from "prop-types";

export default function QuantityUpdater({ quantity, onChange }) {
    function handleChange(e) {
        if (e.target.value >= 1) {
            onChange(e);
        }
    }

    return (
        <input
            className="QuantityUpdater"
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={handleChange}
        />
    );
}

QuantityUpdater.propTypes = {
    quantity: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};
