import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { numberGamesCarts, setRefreshUpdate } from "../../redux/actions";
import styles from "./index.module.css";

function CardPruchaseGame({ game }) {
  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name"));
    const newGameShooping = gameLocalStorage.filter(
      (gamers) => gamers.id !== game.id
    );
    localStorage.setItem("name", JSON.stringify(newGameShooping));
    dispatch(setRefreshUpdate());
    dispatch(numberGamesCarts(gameLocalStorage.length - 1));
  };

  return (
    <div className={styles.containerGameCart}>
      <span className={styles.price}>{game.price}$</span>
      <Link to={`/detail/${game.id}`}>
      <img src={game.image} alt={game.name} />
      </Link>
      <span className={styles.nameGame}>{game.name}</span>
      <i className="bi bi-trash" onClick={handleDeleteCart}></i>
    </div>
  );
}

export default CardPruchaseGame;
