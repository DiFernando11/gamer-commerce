import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Descripcion from "../descripcion/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";


function DetailGame() {
  const videoGames = {
    imgMain:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/gallery/5bbb5a065cafe8ab7c3c986a/galeria-videojuegos.jpg",
  };

  const dispatch = useDispatch();
  const game = useSelector((state) => state.Details);
  const { id } = useParams();
  const images= [game.image, game.image2, game.image, game.image2];

  useEffect(() => {
    dispatch(getDetails(id));
    
  }, [dispatch, id]);

  const [imageCurrent, setImageCurrent] = useState(videoGames.imgMain);
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
            <h1>{game.name} </h1>
            <img
              className={styles.imgMainGame}
              src={imageCurrent}
              alt="logo main game"
            />
            <ul className={styles.container_images_secondary}>
              {images.length
                ? images.map((game , index) => (
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
        <Descripcion />
      </div>
    </section>
  );
}

export default DetailGame;
