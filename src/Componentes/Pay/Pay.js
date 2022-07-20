import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../Cart/CartItem';
import { CartContext } from '../CartContext/CartContex';
import Forms from '../Form/Forms';

const Pay = () => {
    const { cartList, TotalProducts, TotalPrice } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0);
    const { cart } = useContext(CartContext);

        useEffect(() => {
        if (cartList.length > 0) {
            setTotalPrice(
            cartList
                .map((product) => product.price * product.count)
                .reduce((total, price) => total + price)
            );
        }
        }, [cart]);
    
        return (
            <>
                <div className="checkout container">
                    <div className="card text-center">
                        <div className="card-header">Resúmen</div>
                        <div className="card-body">
                            <h5 className="card-title">Total: ${TotalPrice}</h5>
                            <link to="/form" className="btn btn-primary">
                            Realizar compra
                            </link>
                        </div>
                    </div>
                </div>
                <Forms />
            </>
        );
    };



export default Pay;