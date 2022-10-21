import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { topGenrresGames } from "../../redux/actions";
import CarrouselRecommended from "../carouselRecommended";
import styles from "./index.module.css";

function CarrouselMainCategory() {
  const games = useSelector((state) => state.games);
  const gamesTopGenrresGame = useSelector((state) => state.gamesTopGenrresGame);
  console.log(gamesTopGenrresGame);
  let dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(topGenrresGames(id));
  }, []);
  return (
    <section className={styles.nameGenres}>
      <h1>{id}</h1>
      <CarrouselRecommended videoGames={gamesTopGenrresGame} />
    </section>
  );
}

export default CarrouselMainCategory;
