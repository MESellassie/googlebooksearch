import React from "react";
import book from "../../assets/book.png";

function Navbar() {
     return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <a className="navbar-brand" href="/">
            <img src={book} width="30" height="30" alt=""/>
                <h2 className="title">Google Book Search</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-warning text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;