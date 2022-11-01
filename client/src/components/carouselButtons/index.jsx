import React, { useState } from "react";
import { pagesCurrent, numberPage } from "../../utils/utils";
import CardGenres from "../cardGenres";
import styles from "../carouselButtons/index.module.css";
import GameCard from "../gamesCard";

function CarouselButtons({ game, category }) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);

  const imageVideoGameLength = Math.ceil(game.length / 4);
  const currentPosts = pagesCurrent(game, statePageVideoGame, 4);
  const pages = numberPage(imageVideoGameLength);
  const handleNextCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === imageVideoGameLength ? 1 : statePageVideoGame + 1
    );
  };
  const handlePrevCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === 1 ? imageVideoGameLength : statePageVideoGame - 1
    );
  };
  return (
    <div className={styles.container_carousel}>
      <div className={`${styles.columnas} ${styles.columnasMobile}`}>
        {/* Maneja el carrouse de imagenes de juegos en Mobile tanto en filtro de jueos como en generos */}
        {game.length && !category
          ? game.map((videoGame, index) => (
              <div key={index}>
                <GameCard game={videoGame} alt={"carousel images"} />
              </div>
            ))
          : game.length
          ? game.map((videoGame, index) => (
              <div key={index}>
                <CardGenres game={videoGame} />
              </div>
            ))
          : null}
        {/* end */}
      </div>

      <div className={`${styles.columnas} ${styles.columnasDestokp}`}>
        {/* Boton de movimiento left */}
        <button
          className={styles.button}
          onClick={handlePrevCardImagesVideoGame}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {/* end */}
        {/* Maneja el carrouse de imagenes de juegos en Destokp tanto en filtro de jueos como en generos */}
        {!category && currentPosts.length
          ? currentPosts.map((videoGame, index) => (
              <div key={index}>
                <GameCard game={videoGame} alt={"carousel images"} />
              </div>
            ))
          : currentPosts.map((videoGame, index) => (
              <div key={index}>
                <CardGenres game={videoGame} />
              </div>
            ))}
        {/* end */}
        {/* Button de movimiento rigth */}
        <button
          className={styles.button}
          onClick={handleNextCardImagesVideoGame}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
        {/* end */}
      </div>
      <div className={`${styles.inactivo}`}>
        {/* Paginacion */}
        {pages.length &&
          pages.map((page) => (
            <button
              className={`${styles.button_page_navigation} ${
                styles.columnasDestokp
              } ${page === statePageVideoGame && styles.active}`}
              key={page}
            ></button>
          ))}
        {/* end */}
      </div>
    </div>
  );
}

export default CarouselButtons;
