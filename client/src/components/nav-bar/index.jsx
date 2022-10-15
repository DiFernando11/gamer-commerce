import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" exact to="/">NOMBRE PAGINA</Link>
          <button
            className="navbar-toggler border border-info text-info"
            onClick={handleClick}
          >
            {click ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div
            className={
              click
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/createuser">
                  Create User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/creategames">
                  Create Game
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link text-light">
                  Categories
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown border-0 select-dark">
                {/* <Link
                  className="nav-link text-light dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Link> */}
                {/*    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul> */}
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
