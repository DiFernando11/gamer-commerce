import React from "react";
import { useDispatch } from "react-redux";
import { setRefreshUpdate } from "../../redux/actions";
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
  };
console.log(game)
  return (
    <div className={styles.containerGameCart}>
      <span className={styles.price}>{game.price}$</span> 
     <img src={game.image} alt={game.name} />
      <span className={styles.nameGame}>{game.name}</span>
      <i className="bi bi-trash" onClick={handleDeleteCart}></i>
    </div>
  );
}

export default CardPruchaseGame;
