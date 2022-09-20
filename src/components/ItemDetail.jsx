import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from './ItemCount'


const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    

    const onAdd = (item, counter) =>{
        setCounter(counter);
        addItem(item, counter);
    }

    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-4">
                    <img src={item.photo} alt="img" className="card mb-3" style={{width:'300px'}}/>
                </div>
                <div className="col">
                    <h4>{item.title}</h4>
                    <span style={{color:'orange'}}>{item.category}</span><br></br>
                    <span>{item.editorial}</span>
                    <p>{item.description}</p>
                    <h5><b>${item.price}</b></h5>
                    <ItemCount stock={5} initial={1} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail