import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTenGames } from "../../redux/actions";

import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import Header from "../header";
import LiveVideoGame from "../liveVideoGame";
import styles from "./index.module.css";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const rol = useSelector(state=> state.roleSignInSaveStorage)
  
  // const allGames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getTenGames());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <div className={styles.containerTitleFilters}>
        <span className={styles.titleFilters}>FEATURED AND RECOMMENDED</span>
      </div>

      <CarrouselRecommended videoGames={games} category={false} />

      <div
        className={`${styles.containerFilters} ${styles.containerTitleFiltersCombination}`}
      >
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          FIND YOUR FAVORITE GAME
        </span>
      </div>
      <CarosuelSectionPrice />
      <div className={styles.containerFilters}>
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          EXPLORE BY GENRES AND MORE
        </span>
      </div>
      <CarouselGenres />
      <div className={styles.containerFilters}>
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          MOST POPULAR GAMES
        </span>
      </div>
      <CarrouselPunctuation />

      <LiveVideoGame />
    </main>
  );
}

export default Home;
