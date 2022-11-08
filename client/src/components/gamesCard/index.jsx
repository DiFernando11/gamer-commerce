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
        {game.with_discount ? 
        <div>
          <span className={styles.mostSold_text_discount}>U$D {game.price},00</span>
          <span className={styles.mostSold_text}>{Number.isInteger(game.discount)
												? `U$D ${game.discount}.00`
												: `U$D ${game.discount}0`}</span>
        </div>
        : <span className={styles.mostSold_text}>U$D {game.price},00</span>}
        
      </div>
    </div>
  );
}

export default GameCard;
