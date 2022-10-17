import React from "react";
import { useSelector } from "react-redux";
import CarrouselRecommended from "../carouselRecommended";
import styles from "./index.module.css";

function CarrouselMainCategory() {
  const games = useSelector((state) => state.games);
  return (
    <section className={styles.nameGenres}>
      <h1>AVENTURA</h1>
      <CarrouselRecommended videoGames={games}  />
    </section>
  );
}

export default CarrouselMainCategory;
