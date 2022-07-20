import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Badge  } from 'react-bootstrap';
import PiccantinoIcon from '../../PiccantinoIcon.png';

import './NavBar.css';

import CartWidgets from '../CartWidgets/CartWidgets';
import CarritoGris from '../../CarritoGris.png'
import Cart from '../Cart/Cart'
import { Children, useContext } from 'react';
import { CartContext } from '../CartContext/CartContex';


function NavBar(){
    const { IconCart, cartList, InCart, TotalProducts } = useContext(CartContext);
    
    return(
        <>
            <Navbar className='navbar'>
                <Container className='container'>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/"><img src={PiccantinoIcon} style={{height:'50px', width:'50px'}}></img></Navbar.Brand>
                        <div className='div-menu'>
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <Link className="link" to="/categoria/pizza">
                                Pizza
                            </Link>
                            <Link className="link" to="/categoria/postre">
                                Postre
                            </Link>
                        </div>
                        <div className='div-carrito'>
                            <Link to="/cart">
                                {cartList.length === 0
                                    ?
                                    <img src={CarritoGris} className="carrito" alt="carrito" />
                                        : 
                                    TotalProducts()}
                            </Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </> 
    )
}

export default NavBar;