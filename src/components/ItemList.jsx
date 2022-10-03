import React from "react";
import Item from './Item'

const ItemList = ({items}) => {
    return(
        <div className="row justify-content-center">
            {items.map(item => 
                <div className="col-md-2 m-3" key={item.id}><Item img={item.photo} id={item.id} title={item.title} price={item.price} />
            </div>)}
        </div>
    )
}

export default ItemList;