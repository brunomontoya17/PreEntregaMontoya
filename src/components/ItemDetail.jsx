import React, { useEffect, useState } from 'react';
import { getProducts, getProductByID, getProductByCategory } from '../misc/asyncmock';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const [item,setItem] = useState({});

  const options = { style: 'currency', currency: 'ARS' };

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    setItem(getProductByID(id));
  },[id])
  
  return (
    <div style={{ textAlign:'center'}}>
        <h2>{item.name}</h2>
        <h4><b>Precio: </b>{new Intl.NumberFormat('es-AR',options).format(item.price)}</h4>
        <img src={item.img} style={{width:'30%',height:'30%'}}/>
        <p>{item.desc}</p>       
    </div>
  )
}

export default ItemDetail