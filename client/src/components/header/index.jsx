import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function Header() {
  const searchGames = useSelector((state) => state.searchGames);
  return (
    <header className={styles.header}>
      <div className={styles.containerSearchGamesMobiles}>
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
      <div className={styles.containerSpanHomeHeader}>
        <Link to="/login">
        <button className={styles.logIn}>Log In</button>
        </Link>
        <span className={styles.carts}>
          <Link to={"/yourCart"}>
            Tu carrito <i className="bi bi-cart-plus"></i>
          </Link>
        </span>
      </div>

      <div className={styles.containerMainImagePage}></div>
    </header>
  );
}

export default Header;
