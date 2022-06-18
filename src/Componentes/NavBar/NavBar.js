import { Navbar, Container, Nav  } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidgets from '../CartWidgets/CartWidgets';

function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Piccantino</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/categoria/pizza">Pizza</Link>
                    <Link to="/categoria/postre">Postre</Link>
                    <Link to="/cart">Comida</Link>
                    <Link to="#pricing">Contacto</Link>
                </Nav>
                <CartWidgets />
                </Container>
            </Navbar>
            </> 
    )
}

export default NavBar;