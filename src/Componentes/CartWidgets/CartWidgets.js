import { Nav } from 'react-bootstrap'
import CarritoGris from '../../CarritoGris.png'
import Cart from '../Cart/Cart'
import '../CartWidgets/CartWidgets.css'
import ItemCount from '../ItemCount/ItemCount'


function CartWidgets() {
    return (
        <>
            <img src={CarritoGris} className="carrito" alt="carrito" />
            <Nav.Link href="/cart">
                <Cart />
            </Nav.Link>           
        </>
    )
}

export default CartWidgets