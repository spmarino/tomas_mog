import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';
import CartItem from './CartItem';
import './Cart.css';


const Cart = () => {
    const { cartList, EmptyCart, TotalProducts } = useContext(CartContext)

    return (
        <>
                <div className="cartDiv">{ cartList.length < 1 ?(
                        ''
                    )
                        : (
                            cartList.map((i) => <CartItem key= {i.producto.id} producto= {i.producto} />)
                        )}    
                </div>
                <p>Precio todal $ {TotalProducts}</p>
                <button onClick={EmptyCart}>Vaciar carrito</button>
        </>
    )
}

export default Cart