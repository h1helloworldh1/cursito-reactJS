import React from "react";
import Item from './Item'

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => 
                <div key={item.id}><Item id={item.id} title={item.title} editorial={item.editorial} price={item.price} />
            </div>)}
        </div>
    )
}

export default ItemList;