import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Search from "../SearchBar";
import CardPruchaseGame from "../cardPurchaseGame";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
  const searchGames = useSelector((state) => state.searchGames);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" to="/">
            NOMBRE PAGINA
          </Link>
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
                <a href="#Genres" className="nav-link text-light">
                  Categories
                </a>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item dropdown border-0 select-dark"></li>
            </ul>
            <div></div>
            <Search />
            <div className="containerSearchItems">
              {searchGames.length
                ? searchGames
                    .map((game) => (
                      <div className="containerCartGameSearch">
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
        </div>
      </nav>
      <h1>{click}</h1>
    </div>
  );
};

export default NavBar;
