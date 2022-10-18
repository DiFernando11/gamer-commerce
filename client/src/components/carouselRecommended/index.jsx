import React, { useEffect, useState } from "react";
import { pagesCurrent, numberPage } from "../../utils/utils";
import styles from "../carouselRecommended/index.module.css";
import { Link } from "react-router-dom";
import ButtonAddCarts from "../buttonAddCarts";
function CarrouselRecommended({ videoGames }) {
  console.log(videoGames)
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);
  const [isActive, setIsActive] = useState(true);

  const imageVideoGameLength = videoGames.length;

  const currentPosts = pagesCurrent(videoGames, statePageVideoGame, 1);

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
  const isChangeActive = () => {
    setIsActive(!isActive);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  // function handleTimeMoveCarousel() {
  //   if (isActive) {
  //     setTimeout(handleNextCardImagesVideoGame, 2500);
  //   }
  // }
  // useEffect(() => {
  //   handleTimeMoveCarousel();
  // });

  return (
    <section
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
        {currentPosts.length ? (
          currentPosts.map((videoGame, index) => (
            <div className={styles.flex_container_imageRecommended} key={index}>
              <div className={styles.container_image_main}>
                <Link key={index} to={`detail/${videoGame.id}`}>
                  <img
                    className={styles.imageCaoruselRecommendMain}
                    src={videoGame.image}
                    alt={"carousel images"}
                  />
                  <div className={styles.container_mobile_description}>
                    <span className={styles.title_game_mobile}>
                      {videoGame.name}
                    </span>
                    <div className={styles.addCarsCarousel}>
                      <span className={styles.text_price}>{videoGame.price}</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.container_description}>
                <h3>{videoGame.name}</h3>
                <span className={styles.containerStars}>
                  <i className={`bi bi-star-fill ${styles.activeStart}`}></i>
                  <i
                    className={`bi bi-star-fill ${
                      videoGame.rating >= 2 ? styles.activeStart : ""
                    }`}
                  ></i>
                  <i
                    className={`bi bi-star-fill ${
                      videoGame.rating >= 3 ? styles.activeStart : ""
                    }`}
                  ></i>
                  <i
                    className={`bi bi-star-fill ${
                      videoGame.rating >= 4 ? styles.activeStart : ""
                    }`}
                  ></i>
                  <i
                    className={`bi bi-star-fill ${
                      videoGame.rating >= 5 ? styles.activeStart : ""
                    }`}
                  ></i>
                </span>
                {videoGame.website && (
                  <span className={styles.visitedWeb}>
                    visita la web:
                    <a
                      className={styles.visitedWebUrl}
                      href={videoGame.website}
                    >
                      {videoGame.website}
                    </a>
                  </span>
                )}

                <div className={styles.containerTags}>
                  {videoGame.tags.length
                    ? videoGame.tags.map((tag, index) => (
                        <span key={index} className={styles.tagsVideoGame}>
                          {tag}
                        </span>
                      ))
                    : null}
                </div>
                <span className={styles.developVideoGames}>
                  Developers:
                  {videoGame.developers.length && videoGame.developers}
                </span>
                <span className={styles.developLanzamiento}>
                  Lanzamiento: {videoGame.released}
                </span>
                <span className={styles.addCarsCarousel}>
                  <ButtonAddCarts nameGame={videoGame} />
                </span>
                <span style={{ margin: "0" }} className={styles.text_price}>
                  {videoGame.price}$
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.flex_container_imageRecommended_skeleton}>
            loading
            <div className={styles.container_image_main}></div>
          </div>
        )}

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
