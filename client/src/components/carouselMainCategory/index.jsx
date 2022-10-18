import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CarrouselRecommended from "../carouselRecommended";
import styles from "./index.module.css";

function CarrouselMainCategory() {
  const games = useSelector((state) => state.games);
  const { id } = useParams();
  return (
    <section className={styles.nameGenres}>
      <h1>{id}</h1>
      {games.length && <CarrouselRecommended videoGames={games} />}
    </section>
  );
}

export default CarrouselMainCategory;
