import React from "react";
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) =>{
    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-4">
                    <img src={item.photo} alt="img" />
                </div>
                <div className="col">
                    <h4>{item.title}</h4>
                    <span style={{color:'orange'}}>{item.category}</span><br></br>
                    <span>{item.editorial}</span>
                    <p>{item.description}</p>
                    <h5><b>${item.price}</b></h5>
                    <ItemCount stock={5} initial={1} onAdd={0}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail