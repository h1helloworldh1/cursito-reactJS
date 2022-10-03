import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const Cart = () =>{
    const {cart, deleteOne, clear, priceTotal, cartTotal} = useContext(CartContext)
return(
    <div>
        
        {cart.map((items) => (
            <div key={items.id} className="row m-2" style={{alignItems:'center'}}>
                <img className="card m-2 col-2" style={{width:'100px'}} src={items.photo} alt={items.title} />
                <span className="col-2 text-center">{items.title}</span><br/>
                <span className="col-2">USD <b>{items.price}</b></span><br/>
                <span className="col-2">Quantity: <b>{items.quantity}</b></span>
                <button onClick={() => deleteOne(items.id)} className="btn btn-primary m-2 col-1">Delete</button>
            </div>
))}
        <hr/>
        <span className="m-2"><b>Quantity total:</b> {cartTotal()}</span>
        <span className="m-2"><b>Price total:</b> USD <b>{priceTotal()}</b></span><br/>
        <hr/>
        {cart < 1 ? <h2 className="m-2">Your cart is empty <Link to="/">Check our Books</Link></h2>
        
        : <div>
            <button className="btn btn-primary m-2" onClick={clear}>Delete all</button>
            <Link to="/Checkout" className="btn btn-primary m-2">Go to Pay</Link>
        </div>
        }
    </div>

)
}
export default Cart