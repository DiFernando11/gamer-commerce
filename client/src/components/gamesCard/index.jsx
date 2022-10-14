import React from "react";
import styles from "./index.module.css";

function GameCard(props) {
  return (
    <div className={styles.containerGamerCard}>
      <img src={props.game} alt="game name" />
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
