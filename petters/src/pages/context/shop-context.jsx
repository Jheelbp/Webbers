import React, { createContext, useState } from 'react';
import { RPRODUCTS } from '../shop/Requirement-products';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= RPRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => { // Add props as an argument
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const getTotalAmount = () => {
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo =RPRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
      };
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
      const updateCartItemCount =(newAmount , itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: newAmount}));
      };
    const contextValue = { cartItems, addToCart, removeFromCart,updateCartItemCount ,getTotalAmount};
    
    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider> // Use props
    );
};
