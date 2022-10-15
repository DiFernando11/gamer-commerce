import React, { useState } from "react";
import { pagesCurrent, numberPage } from "../../utils/utils";
import styles from "../carouselRecommended/index.module.css";
import { Link } from "react-router-dom";
function CarrouselRecommended({ videoGames, category }) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [imageCoverVideoGame, setImageCoverVideoGame] = useState(
    videoGames[0].image
  );
  const imageVideoGameLength = videoGames.length;
  const currentPosts = pagesCurrent(videoGames, statePageVideoGame, 1);
  const pages = numberPage(imageVideoGameLength);
  const handleNextCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === imageVideoGameLength ? 1 : statePageVideoGame + 1
    );
    setImageCoverVideoGame(
      statePageVideoGame === imageVideoGameLength
        ? videoGames[0].image
        : videoGames[statePageVideoGame].image
    );
  };
  const handlePrevCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === 1 ? imageVideoGameLength : statePageVideoGame - 1
    );
    setImageCoverVideoGame(
      statePageVideoGame === 1
        ? videoGames[imageVideoGameLength - 1].image
        : videoGames[statePageVideoGame - 2].image
    );
  };
  // const handleChangeImage = (value) => {
  //   setImageCoverVideoGame(value);
  //   setIsActive(false);
  // };
  // const handleChangeCoverMain = () => {
  //   setImageCoverVideoGame(videoGames[statePageVideoGame - 1].img);
  //   setIsActive(false);
  // };
  function handleTimeMoveCarousel() {
    if (isActive) {
      setTimeout(handleNextCardImagesVideoGame, 1500);
    }
  }
  const isChangeActive = () => {
    setIsActive(!isActive);
  };

  return (
    <section
      onClick={handleTimeMoveCarousel()}
      className={styles.carousel_recommended}
      onMouseEnter={isChangeActive}
      onMouseLeave={isChangeActive}
    >
      <div className={styles.container_buttonNextPrev_flex}>
        <button
          className={styles.button}
          onClick={handlePrevCardImagesVideoGame}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        {currentPosts.length
          ? currentPosts.map((videoGame, index) => (
              <div
                className={styles.flex_container_imageRecommended}
                key={index}
              >
                <div className={styles.container_image_main}>
                  <Link key={index} to={`detail/${videoGame.name}`}>
                    <img
                      className={` ${
                        category
                          ? styles.imageCarouselMainCategory
                          : styles.imageCaoruselRecommendMain
                      }`}
                      src={imageCoverVideoGame}
                      alt={"carousel images"}
                    />
                    <div className={styles.container_mobile_description}>
                      <span className={styles.title_game_mobile}>GTA V</span>
                      <div className={styles.addCarsCarousel}>
                        <span>
                          Agregar al carrito <i className="bi bi-cart3"></i>{" "}
                        </span>
                        <span className={styles.text_price}>$60</span>
                      </div>
                    </div>
                  </Link>
                </div>
                {!category ? (
                  <div className={styles.container_description}>
                    <h3>GTA V</h3>
                    <div className={styles.container_preview_image_recommended}>
                      {/* {videoGame.image.length
                        ? videoGame.image.map((game, index) => (
                            <img
                              onMouseOver={() => handleChangeImage(game)}
                              onMouseOut={handleChangeCoverMain}
                              key={index}
                              src={game}
                              alt={"logo game"}
                            />
                          ))
                        : null} */}
                    </div>
                    <span className={styles.mostSold_text}>Lo mas vendido</span>
                    <div className={styles.addCarsCarousel}>
                      <span>
                        Agregar al carrito <i className="bi bi-cart3"></i>{" "}
                      </span>
                      <span
                        style={{ margin: "0" }}
                        className={styles.text_price}
                      >
                        $60
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.containerDescriptionCategory}>
                    <h2>GTA 5</h2>
                    <span>Fecha de Lanazamiento</span>
                    <span>5 estrellas de puntuacion</span>
                    <span>Categorias: </span>
                    <span>Los mejores juegos de la categoria Aventura</span>
                    <span className={styles.mostSold_text}>Lo mas vendido</span>
                    <div className={styles.addCarsCarousel}>
                      <span>
                        Agregar al carrito <i className="bi bi-cart3"></i>
                      </span>
                      <span
                        style={{ margin: "0" }}
                        className={styles.text_price}
                      >
                        $60
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))
          : null}
        <button
          className={`${styles.button} ${styles.button_right}`}
          onClick={handleNextCardImagesVideoGame}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
      <div className={`${styles.inactivo}`}>
        {pages.length &&
          pages.map((page) => (
            <button
              className={`${styles.button_page_navigation} ${
                page === statePageVideoGame && styles.active
              }
            `}
              key={page}
            ></button>
          ))}
      </div>
    </section>
  );
}

export default CarrouselRecommended;
