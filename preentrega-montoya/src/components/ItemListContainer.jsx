import React from 'react'

function ItemListContainer(props) {
  const h1Style = {
    'background-color':'powderblue',
    'text-align':'center',
    'font-family':'courier',
  }
  
  return (
    <div>
        <h1 style={h1Style}>{props.greeting}</h1>
    </div>
  )
}

export default ItemListContainer