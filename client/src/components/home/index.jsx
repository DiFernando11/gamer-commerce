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
  const roleSignInSaveStorage = useSelector(
    (state) => state.roleSignInSaveStorage
  );
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTenGames());
  }, [dispatch]);
  const getDataSingInUser = () => {
    // const dataLocaleStorage = JSON.parse(localStorage.getItem("userSingIn"));
    // if (!dataLocaleStorage) {
    //   return dispatch(roleSignSaveStorage(dataLocaleStorage));
    // }
    return JSON.parse(localStorage.getItem("userSingIn"));
  };
  useEffect(() => {
    // getDataSingInUser();
    dispatch(roleSignSaveStorage(!getDataSingInUser() || {}));
  }, []);

  return (
    <main>
      <Header />
      <div className={styles.containerTitleFilters}>
        <span className={styles.titleFilters}>DESTACADOS Y RECOMENDADOS</span>
      </div>

      <CarrouselRecommended videoGames={games} category={false} />

      <div
        className={`${styles.containerFilters} ${styles.containerTitleFiltersCombination}`}
      >
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          ENCUENTRA TU JUEGO FAVORITO
        </span>
      </div>
      <CarosuelSectionPrice />
      <div className={styles.containerFilters}>
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          EXPLORA POR GENEROS Y MÁS
        </span>
      </div>
      <CarouselGenres />
      <div className={styles.containerFilters}>
        <span
          className={`${styles.titleFilters} ${styles.titleFiltersCombination}`}
        >
          JUEGOS MAS POPULARES
        </span>
      </div>
      <CarrouselPunctuation />

      <LiveVideoGame />
    </main>
  );
}

export default Home;
