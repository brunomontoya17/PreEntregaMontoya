import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContainer';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CartDetail(props) {
    const [cart, addItemCart, removeItemCart, returnQuantityItem,
         returnQuantities, emptyCart, deleteItemCart, returnTotal, isEmpty] = useContext(CartContext);

    return (
        <div>
            <Modal show={props.showCart} onHide={props.handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Detalle</th>
                                <th>Precio Unitario</th>
                                <th>Subtotal</th>
                                <th>Restar</th>
                                <th>Sumar</th>
                                <th>Eliminar detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((itemcart) => {
                                   return (<tr key={itemcart.id}>
                                    <td>{itemcart.quantity}</td>
                                    <td>{itemcart.name}</td>
                                    <td>{itemcart.price}</td>
                                    <td>{itemcart.price*itemcart.quantity}</td>
                                    <td><Button onClick={ () => {
                                        removeItemCart(itemcart);
                                        if (isEmpty.current)
                                            props.handleClose();
                                    }}>➖</Button></td>
                                    <td><Button onClick={ () => addItemCart(itemcart)}>➕</Button></td>
                                    <td><Button onClick={ () => {
                                        deleteItemCart(itemcart);
                                        if (isEmpty.current)
                                            props.handleClose();
                                    }}>🗑️</Button></td>
                                </tr>) 
                                })
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><b>Total de la compra:</b></td>
                                <td><b>{returnTotal()}</b></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={props.handleClose}> Salir </Button>
                    <Button variant='secondary' onClick={() => {
                        emptyCart();
                        props.handleClose();
                    }}> Vaciar Carrito </Button>
                    <Link to={"/checkout"}><Button variant='primary' onClick={props.handleClose}> Finalizar Compra </Button>
                    </Link>
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CartDetail