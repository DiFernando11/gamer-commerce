import React from "react";
import { Link } from "react-router-dom";
import ButtonAddCarts from "../buttonAddCarts";
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

      <Link to={`/detail/${game.id}`}>
        <img src={game.image} alt="game name" />
      </Link>
      <div className={styles.container_addCarts}>
        <ButtonAddCarts nameGame={game} />
        <span className={styles.mostSold_text}>U$D {game.price},00</span>
      </div>
    </div>
  );
}

export default GameCard;
