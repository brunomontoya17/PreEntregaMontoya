import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
//import { getCategories } from '../misc/asyncmock';
import { getCategories } from '../misc/firebase';

const NavBar = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
            console.table(data);
        })
    },[]);

  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand as={Link} to='/'>Action Hardware</Navbar.Brand>
                <Nav className='me-auto'>
                    <NavDropdown title='Categorias'>
                        {
                            categories.map((cat) => {
                                return <NavDropdown.Item key={cat.id} as={Link} to={`/category/${cat.id_category}`} >{cat.name}</NavDropdown.Item>
                            })
                        }
                    </NavDropdown>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar