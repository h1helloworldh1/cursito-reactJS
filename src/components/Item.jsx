import React from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'

const Item = ({title, price, id, img}) => {
    return(
        <div key={id}>
            <div className="card" style={{width: '14rem', height:'520px'}}>
                <Link to={'/book/' + id}><img  className="card-img-top p-3" src={img} alt={img} /></Link>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <span>${price}</span>
                    <ItemCount stock={5} initial={1} onAdd={0}/>
                </div>
            </div>
        </div>
    )
}

export default Item;