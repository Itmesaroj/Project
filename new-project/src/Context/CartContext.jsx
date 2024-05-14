
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
    const cart = JSON.parse(localStorage.getItem('Cart')) || [];

    const [cartData, setCartData] = useState(cart);

    function handleUpdate(newData) {
        localStorage.setItem("Cart", JSON.stringify(newData));
        setCartData(newData); 
    }

    return (
        <CartContext.Provider value={{ cartData, handleUpdate }}>
            {children}
        </CartContext.Provider>
    );
}
