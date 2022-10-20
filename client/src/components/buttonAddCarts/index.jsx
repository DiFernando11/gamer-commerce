import React from "react";
import styles from "./index.module.css";

function ButtonAddCarts({ nameGame }) {
  const saveGamesToBuy = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name"));
    if (gameLocalStorage) {
      if (!gameLocalStorage.some((game) => game.id === nameGame.id)) {
        const newGameShooping = [...gameLocalStorage, nameGame];
        localStorage.setItem("name", JSON.stringify(newGameShooping));
      }
    }
  };

  return (
    <span className={styles.buttonAddCarts} onClick={saveGamesToBuy}>
      Agregar al carrito <i className="bi bi-cart3"></i>
    </span>
  );
}

export default ButtonAddCarts;
