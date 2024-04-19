import React, { useEffect, useState } from 'react'
import { getOrders } from '../misc/firebase';
import { Container, Table } from 'react-bootstrap';

function FinishedBuys() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        console.log("Use effect ejecutado")
        getOrders().then((resp) => {
            setOrders(resp);
        })
    }, [])

    return (
        <div>
            <h1>Ordenes de compra:</h1>
            {
                orders.map((order) => {
                    return (
                        <Container key={order.id}>
                            <p><b>Nombre Cliente:</b>{order.buyer.clientname}</p>
                            <p><b>Telefono:</b>{order.buyer.phone}</p>
                            <p><b>Email:</b>{order.buyer.email}</p>
                            <p><b>Fecha:</b>{order.date.toDate().toString()}</p><br />
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
                                        order.items.map((itemcart) => {
                                            return (<tr key={`${order.id}::${itemcart.id}`}>
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
                                        <td><b>{order.total}</b></td>
                                    </tr>
                                </tfoot>
                            </Table><br /><br />
                        </Container>)
                })
            }
        </div>
    )
}

export default FinishedBuys