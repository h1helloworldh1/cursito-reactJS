import React from "react";

const Item = ({title, editorial, price, id}) => {
    return(
        <div key={id} className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{editorial}</p>
                    <span>${price}</span>
                </div>
            </div>
        </div>
    )
}

export default Item;