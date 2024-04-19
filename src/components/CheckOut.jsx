import React, { useState } from 'react'
import { Table } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContainer';
import { sendOrder } from '../misc/firebase';
import { useNavigate } from 'react-router-dom';

function CheckOut() {
    const [cart, addItemCart, removeItemCart, returnQuantityItem, 
        returnQuantities, emptyCart, deleteItemCart, returnTotal] = useContext(CartContext);

    function crearBuyer() {
        this.clientname = '';
        this.phone = '';
        this.email = '';
    }
    const [buyer, setBuyer] = useState(new crearBuyer())
    const navigate = useNavigate();

    const ordenDeCompra = (e) => {
        e.preventDefault();
        const orden = {
            buyer: {...buyer},
            items: cart.map((itemcart) => {
                return {...itemcart};
            }),
            total: returnTotal(),
            date: new Date()
        }
        sendOrder(orden);
        emptyCart();
        setBuyer(new crearBuyer());
        navigate('/purchases');
    }

    return (
        <div>
            <h1>Finalizar Compra</h1>
            <p>Este es el detalle de su pedido:</p>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Detalle</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((itemcart) => {
                            return (<tr key={itemcart.id}>
                                <td>{itemcart.quantity}</td>
                                <td>{itemcart.name}</td>
                                <td>{itemcart.price}</td>
                                <td>{itemcart.price * itemcart.quantity}</td>
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
                    </tr>
                </tfoot>
            </Table>
            <br />
            <form id='clientdata' onSubmit={ordenDeCompra}>
                <label htmlFor='clientname'>Nombre Cliente:</label>
                <input id='clientname' type='text' value={buyer.clientname} onChange={
                    (e) => {
                        setBuyer(({
                            ...buyer,
                            clientname:e.target.value
                        }))
                    }
                }/><br/>
                <label htmlFor='phone'>Telefono:</label>
                <input id='phone' type='text' value={buyer.phone} onChange={
                    (e) => {
                        setBuyer(({
                            ...buyer,
                            phone:e.target.value
                        }))
                    }
                }/><br/>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='text' value={buyer.email} onChange={
                    (e) => {
                        setBuyer(({
                            ...buyer,
                            email:e.target.value
                        }))
                    }
                }/><br/>
                <input id='addOrder' type='submit' value={"Ordenar pedido"} />
            </form>
        </div>
    )
}

export default CheckOut