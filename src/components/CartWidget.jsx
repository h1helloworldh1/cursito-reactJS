import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"

const CartWidget = () =>{
    const {cartTotal, clear} = useContext(CartContext);
    const cartIcon = {icon:"shopping-cart.png"}
    const binIcon = {icon:"bin.png"}
    return(
        <div>
            <button type="button" className="btn position-relative me-1" title="clear cart" onClick={
                ()=> {clear()}
            }>
                <img style={{width: '24px', backgroundColor:"white"}} src={binIcon.icon} alt="bin" />
            </button>
            <Link to={"/cart"}>
                <button type="button" className="btn position-relative" title="See cart">
                    <img src={cartIcon.icon} alt="cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartTotal()}
                    </span>
                </button>

            </Link>
        </div>
    )
}

export default CartWidget;