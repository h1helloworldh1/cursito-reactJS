import React from "react";
import { Link } from "react-router-dom";

const Success = ({id}) =>{
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1><b>Congratulations!</b></h1>
                    <p style={{fontSize:"100px", textShadow: '2px 2px #000'}}><Link to={"/"} style={{textDecoration:'none'}} className="text-light">dev<b className="text-warning" >books</b></Link></p>
                    <p><b>ID order: </b>{id}</p>
                </div>
            </div>
        </div>
    )
}

export default Success