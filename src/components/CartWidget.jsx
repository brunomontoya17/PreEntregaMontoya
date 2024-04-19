import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import imageSrc from '../images/64px-Shopping_cart_icon.png'
import { CartContext } from '../contexts/CartContainer';
import CartDetail from './CartDetail';

function CartWidget() {
  const [cart, addItemCart, removeItemCart, returnQuantityItem,
    returnQuantities, emptyCart, deleteItemCart, returnTotal, isEmpty] = useContext(CartContext);

  const [showCart, setShowCart] = useState(false);
  const handleShow = () => {
    if (!isEmpty.current)
      setShowCart(true);
  }
  const handleClose = () => setShowCart(false);

  return (
    <div>
        <Button onClick={handleShow}>
            <Image src={imageSrc} roundedCircle />
            <Badge bg="secondary">{
              returnQuantities()
            }</Badge>
        </Button>
        <CartDetail showCart={showCart} handleClose={handleClose}/>
    </div>
  )
}

export default CartWidget