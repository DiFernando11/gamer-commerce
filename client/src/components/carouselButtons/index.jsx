import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pagesCurrent, numberPage } from "../../utils/utils";
import styles from "../carouselButtons/index.module.css";

function CarouselButtons({ image, category }) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);

  const imageVideoGameLength = Math.ceil(image.length / 4);
  const currentPosts = pagesCurrent(image, statePageVideoGame, 4);
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
      <div className={styles.columnas}>
        <button
          className={styles.button}
          onClick={handlePrevCardImagesVideoGame}
        >
          ⪻
        </button>

        {!category && currentPosts.length
          ? currentPosts.map((videoGame, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`detail/${videoGame.name}`}
              >
                <div   key={index}>
                  <img
                    className={styles.videoGamesImagesControlCarousel}
                    src={videoGame.img}
                    alt={"carousel images"}
                    height="190"
                    width={200}
                  />
                </div>
              </Link>
            ))
          : currentPosts.map((videoGame, index) => (
              <Link
              key={index}
                style={{ textDecoration: "none" }}
                to={`genres/${videoGame.category}`}
              >
                <div>
                  <h1 className={styles.tipo}> {videoGame.category}</h1>
                  <img
                    className={styles.videoGamesImagesControlCarousel}
                    key={index}
                    src={videoGame.img}
                    height="190"
                    width={200}
                    alt={"carousel images"}
                  />
                </div>
              </Link>
            ))}

        <button
          className={styles.button}
          onClick={handleNextCardImagesVideoGame}
        >
          ⪼
        </button>
      </div>
      <div className={`${styles.inactivo}`}>
        {pages.length &&
          pages.map((page) => (
            <button
              className={`${page === statePageVideoGame && styles.active}`}
              key={page}
            ></button>
          ))}
      </div>
    </div>
  );
}

export default CarouselButtons;
