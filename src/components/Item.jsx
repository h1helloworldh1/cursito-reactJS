import React from "react";
import { Link } from "react-router-dom";
// import ItemCount from './ItemCount'

const Item = ({title, price, id, img}) => {
    return(
        <div key={id}>
            <div className="card" style={{width: '240px', height:'420px'}}>
                <Link to={'/book/' + id}><img  className="card-img-top p-3" src={img} alt={img} /></Link>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span style={{fontSize: '20px'}}>US$<b>{price}</b></span>
                    {/* <ItemCount stock={5} initial={1} onAdd={0}/> */}
                </div>
            </div>
        </div>
    )
}

export default Item;