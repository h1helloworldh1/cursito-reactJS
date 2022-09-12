import React from "react";
import ItemCount from './ItemCount'

const Item = ({title, editorial, price, id}) => {
    return(
        <div key={id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{editorial}</p>
                    <span>${price}</span>
                    <ItemCount stock={5} initial={1} onAdd={0}/>
                </div>
            </div>
        </div>
    )
}

export default Item;