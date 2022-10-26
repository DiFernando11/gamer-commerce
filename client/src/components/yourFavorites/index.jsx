import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isPurchasedGame } from "../../utils/utils";
import styles from "./index.module.css";
import Swal from "sweetalert2";

function YourFavorities({ nameGame }) {
  const user = useSelector((state) => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteCurrent, setIsFavoriteCurrent] = useState(false);

  const saveGamesFavorites = async () => {
    const favoriteLocalStorage =
      JSON.parse(localStorage.getItem("favorite")) || [];
    if (!favoriteLocalStorage.some((game) => game.id === nameGame.id)) {
      const newGameFavorite = [...favoriteLocalStorage, nameGame] || [];
      localStorage.setItem("favorite", JSON.stringify(newGameFavorite));
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        customClass: {
          popup: styles.coloredSuccede,
          title: styles.titles,
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "success",
        title: "Added to favorites",
      });
    } else {
      const newGameFavorite = favoriteLocalStorage.filter(
        (gamers) => gamers.id !== nameGame.id
      );
      localStorage.setItem("favorite", JSON.stringify(newGameFavorite));
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        customClass: {
          popup: styles.coloredWarning,
          title: styles.titles,
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "warning",
        title: "Removed from favorites",
      });
    }
  };
  const purchasedGameUser = isPurchasedGame(user, nameGame);
  // const favoriteGame = JSON.parse(localStorage.getItem("favorite")) || [];
  // const isFavoriteGames = favoriteGame.some(
  //   (games) => Number(games.id) === Number(nameGame?.id)
  // );
  // useEffect(() => {
  //   setIsFavoriteCurrent(isFavoriteGames);
  // }, [isFavorite]);
  return (
    <div className={styles.favoritesContainerGames}>
      {!purchasedGameUser ? (
        <i className={`bi bi-suit-heart-fill`} onClick={saveGamesFavorites}></i>
      ) : (
        <span className={styles.purchasedCard}>Purchased</span>
      )}
    </div>
  );
}

export default YourFavorities;
