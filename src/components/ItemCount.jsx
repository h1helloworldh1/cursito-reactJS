import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemStock, setItemStock] = useState(stock);
    const [quantity, setQuantity] = useState(initial);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const moreQuantity = (value) =>{
        if(value <= itemStock){
            setQuantity(value);
        }
    }
    const lessQuantity = (value) =>{
        if(value > 0 ){
            setQuantity(value);
        }
    }
    const addProducts = () =>{
        if(quantity <= itemStock){
            setItemStock(itemStock - quantity);
            setItemAdd(itemAdd + quantity)
        }
    }
    return(
        <div>
            <label htmlFor="button">Quantity: {quantity} in Stock: {stock}</label>
            <hr/>
            <input className="btn btn-primary m-1" type="button" value="+" onClick={()=>{
                moreQuantity(quantity + 1)
            }}/>
            <input className="btn btn-primary me-1" type="button" value="-" onClick={()=>{
                lessQuantity(quantity - 1)
            }}/>
            <input className="btn btn-primary" type="button" value="add to cart" onClick={()=>{
                addProducts();
            }}/><br/>
            <span>Books in cart: {itemAdd}</span>
        </div>
    )
}

export default ItemCount