import React from "react";
import { navBarOptions } from "../helpers/strings";
import CartWidget from "./CartWidget";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#top">dev<b>books</b></a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {navBarOptions.map(navBarOption =>    
                        <li  key={navBarOption.id} className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#top">{navBarOption.category}</a>
                        </li>)}
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;