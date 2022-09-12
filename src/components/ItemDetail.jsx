import React from "react";
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) =>{
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <ItemCount stock={5} initial={1} onAdd={0}/>
            </div>
        </div>
    )
}

export default ItemDetail