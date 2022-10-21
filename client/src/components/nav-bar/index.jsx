import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Search from "../search";

import { useSelector } from "react-redux";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  var pathname = window.location.pathname;
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );
  console.log(roleSignInSaveStorage, "estado global");
  const searchGames = useSelector((state) => state.searchGames);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" to="/">
            NAME PAGE
          </Link>
          <div className="SearchDestokpGame">
            <Search />
          </div>
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
              {/* <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About Us
                </Link>
              </li> */}
              {pathname === "/" ? (
                <li className="nav-item">
                  <a href="#Genres" className="nav-link text-light">
                    Categories
                  </a>
                </li>
              ) : null}

              <li className="nav-item">
                <Link className="nav-link text-light" to="/admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/user">
                  <i className="bi bi-person-circle"></i>
                </Link>
              </li>
            </ul>
            <Search />
            <div className="containerSearchItems containerSearchMobile">
              {searchGames.length
                ? searchGames
                    .map((game, index) => (
                      <div key={index} className="containerCartGameSearch">
                        <Link to={`/detail/${game.id}`}>
                          <img src={game.image} alt="logo gome" />
                          <span>{game.name}</span>
                        </Link>
                      </div>
                    ))
                    .slice(0, 3)
                : null}
            </div>
          </div>
          <div className="containerYourCartNav">
            {Object.entries(roleSignInSaveStorage).length ? (
              <button> log out</button>
            ) : (
              <Link to="/login">
                <button> log in</button>
              </Link>
            )}

            <Link className="nav-link text-light" to="/yourcart">
              <i className="bi bi-cart-plus">Your cart</i>
            </Link>
            {/* <button type="button" onClick={() => localStorage.clear()}>
          Clear Locale
        </button> */}
          </div>
        </div>
      </nav>
      <h1>{click}</h1>
    </div>
  );
};

export default NavBar;
