import React from "react";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#top">devbooks</a>
                    
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#top">Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#top">eBooks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#top">Bestseller</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;