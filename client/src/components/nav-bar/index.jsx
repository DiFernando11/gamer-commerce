import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoLogIn from "../../source/poder.png";
import logoLogOut from "../../source/boton-de-encendido.png";
import "./index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Search from "../search";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import logo from "../../img/logo.png";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const user = useSelector((state) => state.user);
  /* const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn")); */
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
    localStorage.removeItem("name");
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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-info" to="/">
            <div className="containerLogo">
              <img className="imgLogo" src={logo} alt="logo" />
              <div className="game-loop">GAME&nbsp;&nbsp;LOOP</div>
            </div>
          </Link>
          <div className="searchContainerMobileInput">
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
              <li className="imageProfileNavBarMobile">
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
              </li>
              <li className="imageProfileNavBarMobile">
                <Link className="nav-link text-light" to="/yourcart">
                  <span className="textYourCartNavBar">CART</span>
                  <i className="bi bi-cart3" />
                  <span className="counterYourCart">{numberGameCart}</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              {pathname === "/" ? (
                <li className="nav-item">
                  <a href="#Genres" className="nav-link text-light">
                    GENRES
                  </a>
                </li>
              ) : null}
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/about"}
                >
                  ABOUT
                </Link>
              </li>

              {Object.entries(roleSignInSaveStorage).length ? (
                <li className="imageProfileNavBarMobile">
                  <span
                    className="button_login_logout_navBar"
                    onClick={onClick}
                  >
                    LOG OUT
                  </span>
                  <img src={logoLogOut} alt="logo LogOut" />
                </li>
              ) : (
                <li className="imageProfileNavBarMobile">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <div className="ContainerLogFlexNavBar">
                      <span className="button_login_logout_navBar">LOG IN</span>
                      <img src={logoLogIn} alt="logo LogIn" />
                    </div>
                  </Link>
                </li>
              )}
            </ul>

            <div className="containerSearchItems ">
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
              <span className="textYourCartNavBar">YOUR CART</span>
              <i className="bi bi-cart3" />
            </Link>

            {Object.entries(roleSignInSaveStorage).length ? (
              <div className="ContainerLogFlexNavBar" onClick={onClick}>
                <span className="button_login_logout_navBar">LOG OUT</span>
                <img src={logoLogOut} alt="logo LogOut" />
              </div>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="ContainerLogFlexNavBar">
                  <span className="button_login_logout_navBar">LOG IN</span>
                  <img src={logoLogIn} alt="logo LogIn" />
                </div>
              </Link>
            )}

            <Search />
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
