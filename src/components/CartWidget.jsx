import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"

const CartWidget = () =>{
    const {cartTotal, cart} = useContext(CartContext);
    const cartIcon = {icon:"shopping-cart.png"}
    // const binIcon = {icon:"bin.png"}
    return(
        <div className="row">
            {/* <button type="button" className="btn col" title="clear cart" onClick={
                ()=> {clear()}
            }>
                <img style={{width: '23px'}} src={binIcon.icon} alt="bin" />
            </button> */}
            <Link to={"/cart"} className='col'>
                <button type="button" className="btn position-relative" title="See cart">
                    <img src={cartIcon.icon} alt="cart" />
                    {cart < 1 ? <span/> : <span className="position-absolute translate-middle-x badge rounded-pill bg-danger">
                        {cartTotal()}
                    </span> }
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;