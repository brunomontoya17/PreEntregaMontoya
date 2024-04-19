import React, { useEffect, useState, useContext } from 'react';
//import { getProducts, getProductByID, getProductByCategory } from '../misc/asyncmock';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../contexts/CartContainer';
import { Container, Row, Col } from 'react-bootstrap';
import { getProductByID } from '../misc/firebase';

function ItemDetail() {
  const [item,setItem] = useState({});

  const options = { style: 'currency', currency: 'ARS' };

  const { id } = useParams();
  const [cart, addItemCart, removeItemCart, returnQuantityItem] = useContext(CartContext);

  useEffect(() => {
    console.log(id);
    getProductByID(id).then(data => setItem(data));
  },[id])
  
  return (
    <div style={{ textAlign:'center'}}>
        <h2>{item.name}</h2>
        <h4><b>Precio: </b>{new Intl.NumberFormat('es-AR',options).format(item.price)}</h4>
        <img src={item.img} style={{width:'30%',height:'30%'}}/>
        <p>{item.desc}</p>
        <Container>
          <Row style={{float:'inherit' }}>
            <Col><Button style={{float:'left'}} onClick={ () => removeItemCart(item)}>➖</Button></Col>
            <Col><Form.Control style={{width: '35px', float:'left'}} type='text' readOnly value={returnQuantityItem(item)} /></Col>
            <Col><Button style={{float:'left'}} onClick={ () => addItemCart(item)}>➕</Button></Col>
          </Row>
        </Container>
        
        
        
        
    </div>
  )
}

export default ItemDetail