import { useState } from "react";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import products from "../products";
import Checkout from "./Checkout";
import Homepage from "./Homepage";
import Products from "./Products";

export default function App() {
    const [cart, setCart] = useState([
        // {
        //     ...products[0],
        //     quantity: 1,
        // },
    ]);

    function addToCart(product, quantity) {
        if (cart.some((cartProduct) => cartProduct.id == product.id)) {
            setCart((prevCart) => {
                const newCart = [...prevCart];
                const index = newCart.findIndex((cartProduct) => cartProduct.id == product.id);
                newCart[index].quantity += quantity;
                return newCart;
            });
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    }

    function updateCartProductQuantity(id, quantity) {
        setCart((prevCart) => {
            const newCart = [...prevCart];
            const index = newCart.findIndex((cartProduct) => cartProduct.id == id);
            newCart[index].quantity = quantity;
            return newCart;
        });
    }

    function discardProduct(id) {
        setCart(cart.filter((cartProduct) => cartProduct.id != id));
    }

    function handlePayment() {
        setCart([]);
        alert("Payment successful.");
    }

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/shopping-cart/homepage">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping-cart/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping-cart/checkout">
                            Checkout {cart.length != 0 && `(${cart.length})`}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/*" element={<Navigate to="/shopping-cart/homepage" />} />
                <Route path="/shopping-cart/homepage" element={<Homepage />} />
                <Route
                    path="/shopping-cart/products"
                    element={<Products products={products} addToCart={addToCart} />}
                />
                <Route
                    path="/shopping-cart/checkout"
                    element={
                        <Checkout
                            cart={cart}
                            updateCartProductQuantity={updateCartProductQuantity}
                            handlePayment={handlePayment}
                            discardProduct={discardProduct}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
