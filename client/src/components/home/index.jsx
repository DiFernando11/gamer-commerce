import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGames,
  getTenGames,
  roleSignSaveStorage,
} from "../../redux/actions";
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


  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTenGames());
  }, [dispatch]);
  const getDataSingInUser = () => {
    const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
    if (dataLocaleStorage) {
      return dispatch(roleSignSaveStorage(dataLocaleStorage));
    } else {
      return {};
    }
  };
  useEffect(() => {
    // getDataSingInUser();
    dispatch(roleSignSaveStorage(getDataSingInUser()));
  }, []);

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
