import { createContext, useContext } from "react"
import { CartContext } from '../CartContext/CartContex'
import { Card, Button } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
import './CartItem.css';

const CartItem = ({producto}) => {
    const { DelItem, TotalPrice } = useContext(CartContext)
    const {name, categoria, img, price, id, count} = producto
    

    return (
        <>
            <div className='container'>
                <img className='img' src={img} />
                <div className='infoCart'>
                    <div classNmae='infoCartDos'>
                        <p>{`${name} - ${categoria}`}</p>
                        <p>
                            $ {price}
                        </p>
                        <p>
                            Cantidad {count}
                        </p>
                        <Button onClick={() => DelItem(id)} >Borrar producto</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem