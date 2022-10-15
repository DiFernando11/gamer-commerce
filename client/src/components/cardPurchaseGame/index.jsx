import React from "react";
import styles from "./index.module.css";

function CardPruchaseGame() {
  return (
    <div className={styles.containerGameCart}>
      <span className={styles.price}>60$</span>
      <img src="https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg" alt="" />
      <span className={styles.nameGame}>GTA V</span>
      <i className="bi bi-trash"></i>
    </div>
  );
}

export default CardPruchaseGame;
