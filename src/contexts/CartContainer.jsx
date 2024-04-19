import { createContext, useRef, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const isEmpty = useRef(true);

    function createItemLine (item) {
        this.id = item.id;
        this.name = item.name;
        this.price = item.price;
        this.quantity = 1;
    }

    function addItemCart(item) {
        const cartaux = [...cart];
        const itemaux = cartaux.findIndex((itemcart) => itemcart.id == item.id);
        
        if ( itemaux > -1)
        {
            cartaux[itemaux].quantity +=1;
        }
        else {
            cartaux.push(new createItemLine(item));
            isEmpty.current = false;
        }
        setCart(cartaux);
    }

    function removeItemCart(item) {
        const cartaux = [...cart];
        const itemaux = cartaux.findIndex((itemcart) => itemcart.id == item.id);
        if ( itemaux > -1)
        {
            if (cartaux[itemaux].quantity > 1)
                cartaux[itemaux].quantity -=1;
            else {
                cartaux.splice(itemaux,1);
                if (cartaux.length==0) {
                    isEmpty.current = true;
                }
            } 
        }
        setCart(cartaux);
    }

    function returnQuantities ()
    {
        return cart.reduce((count,itemcart,index) => {
            return count + itemcart.quantity;
        },0)
    }

    function returnQuantityItem (item){
        const itemaux = cart.findIndex((itemcart) => itemcart.id == item.id);
        if ( itemaux > -1)
        {
            return cart[itemaux].quantity;
        }
        else {
            return 0;
        }
    }

    function emptyCart ()
    {
        setCart(new Array());
        isEmpty.current = true;
    }

    function deleteItemCart(item) {
        const cartaux = [...cart];
        const itemaux = cartaux.findIndex((itemcart) => itemcart.id == item.id);
        if ( itemaux > -1)
        {
            cartaux.splice(itemaux,1);
            if (cartaux.length==0) {
                isEmpty.current = true;
            }
        }
        setCart(cartaux);
    }

    function returnTotal ()
    {
        return cart.reduce((count,itemcart) => {
            return count + itemcart.quantity*itemcart.price;
        },0)
    }

    return (
        <CartContext.Provider value={[cart, addItemCart, removeItemCart, returnQuantityItem, 
        returnQuantities, emptyCart, deleteItemCart, returnTotal, isEmpty]}>
            {children}
        </CartContext.Provider>
    )
}