import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";




const NavBar = () => {
    const [click, setClick] = useState(true);
    return (
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-info" to="/home">NOMBRE PAGINA</Link>
                <button className="navbar-toggler border border-info text-info" onClick={ () => {setClick(!click)} } >
                    {click ?  <IoIosArrowDown/> : <IoIosArrowUp/> }
                </button>
                <div className= {click ? "collapse navbar-collapse" : "collapse navbar-collapse active" }>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link text-light" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/createuser">Create User</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/creategames">Create Game</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link text-light" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                 {/*    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a> */}
                    <ul className="dropdown-menu">
                        {/* <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <h1>{click}</h1>
       </div>
    );
};



export default NavBar;
