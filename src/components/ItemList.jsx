import React, { useEffect, useState } from 'react'
//import { getProducts, getProductByID, getProductByCategory } from '../misc/asyncmock';
import Item from './Item';

import { getProducts, getProductsByCategory } from '../misc/firebase';

function ItemList({ id }) {

  const [itemList, setItemList] = useState([]);

  useEffect( () => {
    console.log(id);
    if (id==0)
      getProducts().then((data) => setItemList(data))
    else
      getProductsByCategory(id).then((data) => setItemList(data));
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