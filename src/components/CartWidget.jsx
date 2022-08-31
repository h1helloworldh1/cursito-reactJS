import React from "react";

const CartWidget = () =>{
    const cartIcon = {icon:"shopping-cart.png"}
    return(
        <a href="#top" className="me-3">
            <img src={cartIcon.icon} alt=""></img>
        </a>
    )
}

export default CartWidget;