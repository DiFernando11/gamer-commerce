import React, { useState } from "react";
import Descripcion from "../descripcion/descripcion";
import styles from "./index.module.css";
import Descripcion from "../descripcion/index";

function DetailGame() {
  const videoGames = {
    name: "Apex Lengend",
    imgMain:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/apex-legends-switch/hero",
    img: [
      "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
      "https://as01.epimg.net/meristation/imagenes/2022/03/09/mexico/1646788340_221821_1646788475_noticia_normal.jpg",
      "https://play-lh.googleusercontent.com/-d8ESMQOyN6BdCH5TQFUKTcsg1C7nbL2E7fM3RioHmJJWtYxdNDXdc-GAjaHvfKT3mU=w526-h296-rw",
      "https://media.contentapi.ea.com/content/dam/apex-legends/mobile/images/2022/05/primtimetimeblogheader-1.png.adapt.crop191x100.628p.png",
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/980px/public/media/image/2021/05/apex-legends-2325601.jpg?itok=1Bp2eKkQ",
    ],
  };
  const [imageCurrent, setImageCurrent] = useState(videoGames.img);
  const [commentUser, setCommentUser] = useState("");
  const [allComments, setAllComments] = useState([]);
  const hanldeImage = (value) => {
    setImageCurrent(value);
  };

  let handleChange = (e) => {
    e.preventDefault();
    setCommentUser(e.target.value);
  };
  const handleViewComment = (comment) => {
    if (commentUser.length) {
      setAllComments([...allComments, comment]);
    }
    setCommentUser("");
  };


  return (
    <section>
      <div className={styles.sectionDetailGame}>
        <div>
          <div className={styles.containerImageMainGame}>
            <h1>{videoGames.name} </h1>
            <img
              className={styles.imgMainGame}
              src={imageCurrent}
              alt="logo main game"
            />
            <ul className={styles.container_images_secondary}>
              {videoGames.img.length
                ? videoGames.img.map((game , index) => (
                    <li key={index} onClick={() => hanldeImage(game)}>
                      <img src={game} alt="logo" />
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <p className={styles.text_warning}>
            Inicia sesión para añadir este artículo a tu lista de deseados,
            seguirlo o marcarlo como ignorado.
          </p>
        </div>
        <div className={styles.containerComment}>
          <div className={styles.comment_user}>
            <i className="bi bi-person-circle"></i>

            <input
              type="text"
              name="comment"
              placeholder="Danos tu opinion"
              value={commentUser}
              onChange={handleChange}
              autoComplete="off"
            />

            <i
              className="bi bi-send-check-fill"
              onClick={() => handleViewComment(commentUser)}
            ></i>
          </div>
          <div>
            {allComments.length
              ? allComments.map((comment, index) => (
                  <div className={styles.container_comments_users}>
                    <i className="bi bi-person-circle"></i>
                    <p key={index}>{comment}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div>
        <Descripcion/>
      </div>
    </section>
  );
}

export default DetailGame;
