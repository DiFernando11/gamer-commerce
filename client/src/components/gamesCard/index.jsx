import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonAddCarts from "../buttonAddCarts";
import YourFavorities from "../yourFavorites";
import styles from "./index.module.css";

function GameCard({ game, category = false }) {
  const user = useSelector((state) => state.user);
  return (
    <div
      className={`${
        !category
          ? styles.containerGamerCard
          : styles.containerGamerCardCategory
      } `}
    >
      {Object.entries(user).length ? <YourFavorities nameGame={game} /> : null}

      <Link to={`/detail/${game.id}`}>
        <div className={styles.containerImgCard}>
          <img src={game.image} alt="game name" />
          <div className={styles.title}>{game.name}</div>
        </div>
      </Link>
      <div className={styles.container_addCarts}>
        <ButtonAddCarts nameGame={game} />
        <span className={styles.mostSold_text}>U$D {game.price},00</span>
      </div>
    </div>
  );
}

export default GameCard;
