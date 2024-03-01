import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand>Action Hardware</Navbar.Brand>
                <Nav className='me-auto'>
                    <NavDropdown title='Categorias'>
                        <NavDropdown.Item>Motherboards</NavDropdown.Item>
                        <NavDropdown.Item>Procesadores</NavDropdown.Item>
                        <NavDropdown.Item>Memorias RAM</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar