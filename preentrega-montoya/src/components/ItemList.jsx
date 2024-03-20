import React, { useEffect, useState } from 'react'
import { getProducts, getProductByID, getProductByCategory } from '../misc/asyncmock';
import Item from './Item';

function ItemList({ id }) {

  const [itemList, setItemList] = useState([]);

  useEffect( () => {
    console.log(id);
    if (id==0)
      setItemList(getProducts());
    else
      setItemList(getProductByCategory(id));
  },[id])

  return (
    <div>
        { itemList.map((item) => {
            return <Item key={item.id} item={item} />
        })}
    </div>
  )
}

export default ItemList;