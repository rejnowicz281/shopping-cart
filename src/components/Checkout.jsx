import PropTypes from "prop-types";
import CartProduct from "./CartProduct";

export default function Checkout({ cart, updateCartProductQuantity, discardProduct, handlePayment }) {
    function cartTotal() {
        let total = 0;
        cart.forEach((product) => {
            total += product.price * product.quantity;
        });
        return total;
    }

    return (
        <div className="Checkout">
            <h1>This is the checkout page.</h1>
            {cart.length === 0 ? (
                <>Your cart is empty.</>
            ) : (
                <>
                    Your cart has {cart.length} items. Total: ${cartTotal()}
                    {cart.map((cartProduct) => (
                        <CartProduct
                            key={cartProduct.id}
                            product={cartProduct}
                            updateCartProductQuantity={updateCartProductQuantity}
                            discardProduct={discardProduct}
                        />
                    ))}
                    <hr />
                    <button onClick={handlePayment}>Proceed with payment</button>
                </>
            )}
        </div>
    );
}

Checkout.propTypes = {
    updateCartProductQuantity: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    handlePayment: PropTypes.func.isRequired,
    discardProduct: PropTypes.func.isRequired,
};
