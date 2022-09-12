import React from "react";
import Item from './Item'

const ItemList = ({items}) => {
    return(
        <div className="row">
            {items.map(item => 
                <div className="col-md-4 mb-2" key={item.id}><Item id={item.id} title={item.title} editorial={item.editorial} price={item.price} />
            </div>)}
        </div>
    )
}

export default ItemList;