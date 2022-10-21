import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { topGenrresGames } from "../../redux/actions";
import CarrouselRecommended from "../carouselRecommended";
import styles from "./index.module.css";

function CarrouselMainCategory() {
  const gamesTopGenrresGame = useSelector((state) => state.gamesTopGenrresGame);
  let dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(topGenrresGames(id));
  }, [dispatch, id]);
  return (
    <section className={styles.nameGenres}>
      <h1>{id}</h1>
      <CarrouselRecommended videoGames={gamesTopGenrresGame} />
    </section>
  );
}

export default CarrouselMainCategory;
