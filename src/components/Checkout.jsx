import React, { useState, useContext} from "react";
import { CartContext } from "./CartContext";
import Success from "./Success";
import {getFirestore, collection, addDoc} from "firebase/firestore";

const Checkout = () =>{
    const {cart, clear, cartTotal, priceTotal} = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");

    const setOrder = ()=>{
        const buyer = {name:name, email:email, phone:phone};
        const items = [];
        cart.forEach((item) => {
            items.push({id:item.id, title:item.title, price:item.price, quantity:item.quantity});
        })
        const order = {buyer:buyer, items:items, total: priceTotal()};
        
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((data) => {
            clear()
            setOrderId(data.id)
        })
    }

    return(
        <div className="container py-5">
            {cartTotal() > 0 ?
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onInput={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" onInput={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="phone" onInput={(e)=> setPhone(e.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={()=> setOrder()}>Send order</button>
                    </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item=> (
                                <tr key={item.id}>
                                    <td className="text-start"><img src={item.photo} alt={item.title}  title={item.title}
                                    width="100"/></td>
                                    <td className="text-start align-middle">{item.title} x {item.quantity}</td>
                                    <td className="text-end align-middle">{item.quantity} * US${item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-end">Total: <b>US$</b>{priceTotal()}</p>
                </div>
            </div>
            : orderId !== "" ? <Success id={orderId}/>
            : <div className="alert alert-danger text-center" role="alert">Nothing here.</div> }
        </div> 
    )
}
export default Checkout