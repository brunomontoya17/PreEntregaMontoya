import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList';

function ItemListContainer(props) {
  const h1Style = {
    'background-color':'powderblue',
    'text-align':'center',
    'font-family':'courier',
  }

  const { id = 0 } = useParams();

  //const [items,setItems] = useState([]);
  
  return (
    <div>
        <h1 style={h1Style}>{props.greeting}</h1>
        <ItemList id={id} />
    </div>
  )
}

export default ItemListContainer