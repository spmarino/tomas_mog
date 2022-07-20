import { createContext, useState } from "react";

import Toastify from 'toastify-js'


export const CartContext = createContext( [] );

const CartContextProvider = ({ children }) => {

    const [ cartList, serCartList ] = useState( [] );

    const AddToCart = (producto, count) =>{
        if (InCart(producto.id)){
            Toastify({
                text: "Este producto ya se encuentra en el carrito",
                duration: 3000,
                style: {            
                    background: "linear-gradient(to right, #830202, #63020296 )",
                },
            }).showToast();
        }else {
            serCartList( [...cartList, {producto, count}] );
            setTimeout(() => {
                Toastify({
                    text: "Agregado al carrito",
                    className: "info",
                    position: 'right',
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }, 100);
        }
    };

    const EmptyCart = () =>{
        return serCartList ([])
    }

    const DelItem = (id) =>{
        const item = cartList.filter((producto) => producto.producto.id !== id)
        return serCartList (item)
    }
    
    const InCart = (id) =>{
        return cartList && cartList.some((i) => i.producto.id === id);
    };

    const TotalProducts = () =>{   //IconCart
        return cartList.reduce ((acum, i) => acum + i.count, 0)
    }

    const TotalPrice = () => { //TotalProducts
        return cartList.reduce((acum, i) => acum + (i.count * i.producto.price) ,0)
    }

    const Pay = (producto) => {
        return (producto.id)
    }


    return (
        <CartContext.Provider value={{AddToCart, cartList, EmptyCart, DelItem, TotalProducts, TotalPrice, InCart, Pay}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider