import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
                    <Card.Body className="cardBody">
                        <Card.Img className="cardImg" variant="top" src={prod.img} />
                        <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Text>
                                $ {prod.price}
                            </Card.Text>
                    <Link to={`/detalle/${prod.id}`}><Button variant='success'>Detalle</Button></Link>                        
                </Card.Body>
            </Card>
        </>    
    )
}
export default Item;
