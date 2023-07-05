import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="Homepage">
            <h1>Welcome to the homepage. this is the homepage.</h1>
            <Link to="/shopping-cart/products">Go to products</Link>
        </div>
    );
}
