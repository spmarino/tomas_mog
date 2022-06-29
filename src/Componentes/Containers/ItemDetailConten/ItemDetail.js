import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../../CartContext/CartContex';
import ItemCount from '../../ItemCount/ItemCount';



export const ItemDetail = ( {producto} ) => {
    const {name, categoria, price, img, initial, stock} = producto;
    const {AddToCart} = useContext(CartContext);

    const onAdd = (count) => {
        AddToCart ({...producto, count});
    };

    return (
        <>
            <Card className="divCard" style={{ width: '18rem' }}>
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
                                <ItemCount initial={1} stock={10} onAdd={onAdd}/>   
                            </Card.Body>
                </Card>
        </>
    );
}

