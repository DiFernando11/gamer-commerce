import React from "react";
import styles from "./index.module.css";

function GameCard({ game, category = false }) {
  return (
    <div
      className={`${
        !category
          ? styles.containerGamerCard
          : styles.containerGamerCardCategory
      } `}
    >
      <img src={game} alt="game name" />
      <div className={styles.container_addCarts}>
        <span className={styles.available_text}>
          Agregar al carrito <i className="bi bi-cart3"></i>
        </span>
        <span className={styles.mostSold_text}>60$</span>
      </div>
    </div>
  );
}

export default GameCard;
