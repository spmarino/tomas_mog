import { useContext } from "react"
import { CartContext } from '../CartContext/CartContex'
import { Card, Button } from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";

const CartItem = ({producto}) => {
    const { DelItem } = useContext(CartContext)
    const {name, categoria, img, price, id} = producto

    return (
        <>
            <Card className="divCard">
                <Card.Body className='card'>
                    <Card.Img className="cardImg" variant="top" src={img} />
                    <Card.Title>{`${name} - ${categoria}`}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                        <button onClick={() => DelItem(id)} >Terminar compra</button>
                        <button onClick={() => DelItem(id)} >Borrar producto</button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartItem