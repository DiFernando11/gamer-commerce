import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Descripcion from "../descripcion/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDetails,
  postCommentUser,
  searchGame,
} from "../../redux/actions";
import Modal from "../modal";

function DetailGame() {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.Details);
  const videoGames = {
    imgMain:
      "https://img.unocero.com/2021/11/Videojuegos-fuentes-de-informacion-gamers-.jpg",
  };
  const { id } = useParams();
  const images = [
    game.image,
    game.image2,
    game.image,
    game.image2,
    videoGames.imgMain,
  ];

  console.log(game.image);
  const [imageCurrent, setImageCurrent] = useState(
    game.image || videoGames.imgMain
  );
  const [commentUser, setCommentUser] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const hanldeImage = (value) => {
    setImageCurrent(value);
  };

  let handleChange = (e) => {
    e.preventDefault();
    setCommentUser(e.target.value);
  };
  const handleOpenModalAndViewComment = () => {
    const commentUserPost = {
      comment: commentUser,
      userid: 1,
      gameid: game.id,
    };
    if (commentUser.length) {
      dispatch(postCommentUser(commentUserPost));
    }
    setCommentUser("");
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
    dispatch(getDetails(id));
  };
  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(searchGame(""));
  }, [dispatch, id, commentUser]);

  return (
    <section className={styles.body}>
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
                ? images.map((game, index) => (
                    <li key={index} onClick={() => hanldeImage(game)}>
                      <img src={game} alt="logo" />
                    </li>
                  ))
                : null}
            </ul>
          </div>
          {modalVisible && (
            <Modal>
              <div className="containerSuccesfullModal">
                {/* <p className="modal_text_verificated">{responseCreateActivity}</p> */}
                {/* <img src={imgSuccesfullPost} alt="succesfull Post" /> */}
                Buenos dias
              </div>

              <button className="button_accepted" onClick={handleCloseModal}>
                Aceptar
              </button>
            </Modal>
          )}
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
              onClick={handleOpenModalAndViewComment}
            ></i>
          </div>
          <div>
            {game
              ? game.comments
                ? game.comments
                    .map((comment, index) => (
                      <div
                        key={index}
                        className={styles.container_comments_users}
                      >
                        <img
                          src={
                            comment.user.profilePicture &&
                            comment.user.profilePicture
                          }
                          alt="logoUser"
                        />
                        <span className={styles.commentsUserName}>
                          {comment.user.name}
                        </span>

                        <p>{comment.comment.length ? comment.comment : null}</p>
                      </div>
                    ))
                    .reverse()
                : null
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
