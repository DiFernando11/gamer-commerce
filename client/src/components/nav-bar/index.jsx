import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Search from "../search";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const user = useSelector((state) => state.user);
  const searchGames = useSelector((state) => state.searchGames);
  const numberGameCart = useSelector((state) => state.numberGameCart);
  const handleClick = () => setClick(!click);
  var pathname = window.location.pathname;
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );

  const onClick = async (e) => {
    e.preventDefault();
    localStorage.clear();
    await Swal.fire({
      timer: 2000,
      title: "Please wait...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await Swal.fire({
      icon: "success",
      title: `You have logged out`,
      timer: 1500,
    });
    window.location.replace("/");
  };

  return (
    <div className="fixed_container_navBar">
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
            <Link className="nav-link text-light" to="/yourcart">
              <span className="counterYourCart">{numberGameCart}</span>
              <span className="textYourCartNavBar">Your cart</span>
              <i className="bi bi-cart3" />
            </Link>

            {Object.entries(roleSignInSaveStorage).length ? (
              <span className="button_login_logout_navBar" onClick={onClick}>
                log out
              </span>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span> log in</span>
              </Link>
            )}
            {Object.entries(roleSignInSaveStorage).length ? (
              <Link
                className="nav-link text-light"
                to={
                  roleSignInSaveStorage?.user?.isAdmin === false
                    ? "/user"
                    : "/admin"
                }
              >
                <img
                  className="profileImagaUserNavbar"
                  src={
                    user?.profilePicture ||
                    "https://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
                  }
                  alt="logoUser"
                />
              </Link>
            ) : null}

            {/* <button type="button" onClick={() => localStorage.clear()}>
          Clear Locale
        </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
