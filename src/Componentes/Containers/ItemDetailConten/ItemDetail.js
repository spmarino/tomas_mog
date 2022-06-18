import { Card, Button } from 'react-bootstrap';
import ItemCount from '../../ItemCount/ItemCount';


export const ItemDetail = ( {producto} ) => {
    const onAdd = (count) => {
        console.log(count);
    }

    return (
        <>
            <Card className="divCard" style={{ width: '18rem' }}>
                            <Card.Body className='card'>
                                <Card.Img className="cardImg" variant="top" src={producto.img} />
                                <Card.Title>{`${producto.name} - ${producto.categoria}`}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>
                                        $ {producto.price}
                                    </Card.Text>
                                <ItemCount initial={1} stock={10} onAdd={onAdd}/>   
                                {/*<Button variant="primary">Agregar</Button>*/}
                            </Card.Body>
                </Card>
        </>
    )
}
