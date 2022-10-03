import React from "react";
import { Link } from "react-router-dom";
import { navBarOptions } from "../helpers/strings";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"} >dev<b className="text-warning">books</b></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {navBarOptions.map(navBarOption =>    
                        <li  key={navBarOption.id} className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={'/books/' + navBarOption.category}>{navBarOption.category}</Link>
                        </li>)}
                </ul>
                <CartWidget />
            </div>
            
        </nav>
    );
}

export default NavBar;