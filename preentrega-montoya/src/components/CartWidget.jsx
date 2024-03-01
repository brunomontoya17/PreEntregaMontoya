import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import imageSrc from '../images/64px-Shopping_cart_icon.png'

function CartWidget() {
  return (
    <div>
        <Button>
            <Image src={imageSrc} roundedCircle />
            <Badge bg="secondary">2</Badge>
        </Button>
    </div>
  )
}

export default CartWidget