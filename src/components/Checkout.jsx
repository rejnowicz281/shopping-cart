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
            <h1 className="text-center">Let's Bargain.</h1>
            {cart.length === 0 ? (
                <div className="text-center">When you have something in your cart, that is.</div>
            ) : (
                <div>
                    <div className="text-center">
                        <p>
                            Your cart has {cart.length} items. Total: ${cartTotal()}
                        </p>
                        <button className="payment-button" onClick={handlePayment}>
                            Proceed with payment
                        </button>
                    </div>
                    {cart.map((cartProduct) => (
                        <CartProduct
                            key={cartProduct.id}
                            product={cartProduct}
                            updateCartProductQuantity={updateCartProductQuantity}
                            discardProduct={discardProduct}
                        />
                    ))}
                </div>
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
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
    handlePayment: PropTypes.func.isRequired,
    discardProduct: PropTypes.func.isRequired,
};
