import React, { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    // // const {prop} = prop;
    // const {cart, setCart, addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);



    const moreQuantity = (value) =>{
        if(value <= itemStock){
            setCounter(value);
        }
    }
    const lessQuantity = (value) =>{
        if(value > 0 ){
            setCounter(value);
        }
    }
    const addProducts = () =>{
        if(counter <= itemStock){
            onAdd(counter);
            setItemStock(itemStock - counter);
            setCounter(itemStock - counter)
        }
    }
    useEffect(()=>{
        setItemStock(stock);
    },[stock])
    return(
        <div>
            <label htmlFor="button">Quantity: {counter} in Stock: {stock}</label>
            <hr/>
            <input className="btn btn-primary m-1" type="button" value="+" onClick={()=>{
                moreQuantity(counter + 1)
            }}/>
            <input className="btn btn-primary me-1" type="button" value="-" onClick={()=>{
                lessQuantity(counter - 1)
            }}/>
            <input className="btn btn-primary" type="button" value="add to cart" onClick={()=>{
                addProducts();
            }}/><br/>
            {/* <span>Books in cart: {itemAdd}</span> */}
        </div>
    )
}

export default ItemCount