import PropTypes from "prop-types";
import Product from "./Product";

export default function Products({ addToCart, products }) {
    return (
        <div className="Products">
            <h1>Welcome. Here you can browse our products.</h1>

            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

Products.propTypes = {
    addToCart: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};
