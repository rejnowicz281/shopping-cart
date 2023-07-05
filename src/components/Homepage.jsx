import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div className="Homepage text-center">
            <h1 className="page-heading">Welcome to The Zone, Stalker.</h1>
            <Link to="/shopping-cart/products">Browse our products</Link>
        </div>
    );
}
