import React, { useState } from "react";
import { pagesCurrent, numberPage } from "../../utils/utils";
import styles from "../carouselRecommended/index.module.css";
import { Link } from "react-router-dom";
function CarrouselRecommended() {
  const videoGames = [
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
      image: [
        "https://as01.epimg.net/meristation/imagenes/2020/05/15/trucos/1589544811_331717_1589544882_noticia_normal.jpg",
        "http://culturageek.com.ar/wp-content/uploads/2020/05/Culturageek.com_.ar-GTA5-Gratis-1-scaled.jpg",
        "https://cdn.andro4all.com/andro4all/2022/03/GTA-V.jpg",
        "https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
      ],
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
      year: 2002,
      image: [
        "https://media.vandal.net/master/58489/super-smash-bros-ultimate-201811714385186_33.jpg",
        "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_supersmashbrosultimate_1/CI_NSwitch_SmashBrosUltimate_FightersRow_2lines_image950w.jpg",
        "https://areajugones.sport.es/wp-content/uploads/2019/11/Super-Smash-Bros-Ultimate.jpg",
        "https://i.blogs.es/a52207/smashbros0-1/450_1000.jpg",
      ],
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/juegos-lucha.jpg?itok=wMiWNv0G",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
      image: [
        "https://as01.epimg.net/meristation/imagenes/2020/05/15/trucos/1589544811_331717_1589544882_noticia_normal.jpg",
        "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_supersmashbrosultimate_1/CI_NSwitch_SmashBrosUltimate_FightersRow_2lines_image950w.jpg",
        "https://areajugones.sport.es/wp-content/uploads/2019/11/Super-Smash-Bros-Ultimate.jpg",
        "https://i.blogs.es/a52207/smashbros0-1/450_1000.jpg",
      ],
    },
  ];
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [imageCoverVideoGame, setImageCoverVideoGame] = useState(
    videoGames[0].img
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
        ? videoGames[0].img
        : videoGames[statePageVideoGame].img
    );
  };
  const handlePrevCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === 1 ? imageVideoGameLength : statePageVideoGame - 1
    );
    setImageCoverVideoGame(
      statePageVideoGame === 1
        ? videoGames[imageVideoGameLength - 1].img
        : videoGames[statePageVideoGame - 2].img
    );
  };
  const handleChangeImage = (value) => {
    setImageCoverVideoGame(value);
    setIsActive(false);
  };
  const handleChangeCoverMain = () => {
    setImageCoverVideoGame(videoGames[statePageVideoGame - 1].img);
    setIsActive(false);
  };
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
                      className={styles.imageCaoruselRecommendMain}
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
                <div className={styles.container_description}>
                  <h3>GTA V</h3>
                  <div className={styles.container_preview_image_recommended}>
                    {videoGame.image.length
                      ? videoGame.image.map((game, index) => (
                          <img
                            onMouseOver={() => handleChangeImage(game)}
                            onMouseOut={handleChangeCoverMain}
                            key={index}
                            src={game}
                            alt={"logo game"}
                          />
                        ))
                      : null}
                  </div>
                  <span className={styles.mostSold_text}>Lo mas vendido</span>
                  <div className={styles.addCarsCarousel}>
                    <span>
                      Agregar al carrito <i className="bi bi-cart3"></i>{" "}
                    </span>
                    <span className={styles.text_price}>$60</span>
                  </div>
                </div>
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
