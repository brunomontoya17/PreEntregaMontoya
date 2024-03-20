import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Item({item}) {

  const options = { style: 'currency', currency: 'ARS' };
  return (
    <Card style={{ width : '200px' , float:'left'}}>
        <CardBody as={Link} to={`/item/${item.id}`} >
            <CardTitle>{item.name}</CardTitle>
            <CardSubtitle><b>Precio: </b>{new Intl.NumberFormat('es-AR',options).format(item.price)}</CardSubtitle>
            <CardImg src={item.img} />
        </CardBody>
    </Card>
  )
}

export default Item