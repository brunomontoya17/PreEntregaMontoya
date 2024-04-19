import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContainer';
import { useContext } from 'react';


function Item({item}) {

  const options = { style: 'currency', currency: 'ARS' };

  const [cart, addItemCart, removeItemCart, returnQuantityItem] = useContext(CartContext);
  return (
    <Card style={{ width : '200px' , float:'left'}}>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle><b>Precio: </b>{new Intl.NumberFormat('es-AR',options).format(item.price)}</CardSubtitle>
            <Link to={`/item/${item.id_product}`}><CardImg src={item.img} /></Link>
            <Button onClick={ () => removeItemCart(item)}>➖</Button>
            <Form.Control type='text' readOnly value={returnQuantityItem(item)} />
            <Button onClick={ () => addItemCart(item)}>➕</Button>
        </CardBody>
    </Card>
  )
}

export default Item