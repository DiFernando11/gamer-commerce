import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./index.module.css";
import Descripcion from "../descripcion/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDetails,
  postCommentUser,
  LogOutUser,
  searchGame,
  cleanDetails,
} from "../../redux/actions";
import Swal from "sweetalert2";
import { deleteBadWords } from "../../utils/utils";
import Reviews from "../reviews";

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
    game?.image2,
    game.image,
    game?.image2,
    videoGames.imgMain,
  ];
  const [imageCurrent, setImageCurrent] = useState(videoGames.imgMain);
  const [commentUser, setCommentUser] = useState("");
  const stateRefreshUpdate = useSelector((state) => state.stateRefreshUpdate);
  const user = useSelector((state) => state.user);
  const [refreshUpdate, setRefreshUpdate] = useState(false);
  const [error, setError] = useState("");

  const hanldeImage = (value) => {
    setImageCurrent(value);
  };

  let handleChange = (e) => {
    e.preventDefault();
    setCommentUser(e.target.value);
    setError(InputValidator(commentUser));
  };
  const handleOpenModalAndViewComment = () => {
    const commentValidate = deleteBadWords(commentUser);
    const commentUserPost = {
      comment: commentValidate,
      userid: user?.id,
      gameid: game.id,
    };
    if (commentUser.length) {
      dispatch(postCommentUser(commentUserPost)).then(res =>{
     
      if (res.payload.denied){
        dispatch(LogOutUser())
        localStorage.clear();
        localStorage.removeItem("name");
        sessionexpired()
     
      }
      });
      alertSuccesComment();
    }
    setCommentUser("");
  };

  function InputValidator(commentUser) {
    let error = {};
    if (!commentUser.length) {
      error.commentUser = "The field cannot be empty";
    } else if (commentUser.length > 80) {
      error.commentUser = "maximum number of words reached";
    } else if (commentUser.includes["puta"])
      error.commentUser = "no profanity please be more polite";
    return error;
  }
  function someGame() {
    return (
      user &&
      user.orders?.length &&
      user.orders
        .map((game) => game.state === "succeeded" && game.games)
        .flat()
        .map((gameId) => Number(gameId.id))
        .includes(Number(id))
    );
  }
  const getDetailsGames = async () => {
    await dispatch(getDetails(id));
    if (game) {
      setImageCurrent(game?.image);
      setRefreshUpdate(true);
    }
  };

  const purchasedGameUser = someGame();

  const alertBuyGame = () => {
    Swal.fire({
      title: "You like the game?",
      text: "You won't be able to revert this!",
      icon: "warning",
      html: `<p>To leave your review of the game, we invite you to buy it.😉</p>`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go buy",
    }).then((result) => {
      if (result.isConfirmed) {
        const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];

        if (!gameLocalStorage.some((games) => games.id === game.id)) {
          const newGameShooping = [...gameLocalStorage, game] || [];
          localStorage.setItem("name", JSON.stringify(newGameShooping));
        }
        window.location.replace("/yourcart");
      }
    });
  };
  const alertSuccesComment = () => {
    Swal.fire({
      title: "You like the game?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getDetails(id));
      }
    });
  };

  const sessionexpired = () => {
    Swal.fire({
      title: "The sesion has expried",
      text: "You were redirected to the login screen",
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace("/login")
      }
    });
  };

  useEffect(() => {
    getDetailsGames();
    dispatch(searchGame(""));
    window.scrollTo(0, 0);
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch, id, refreshUpdate, stateRefreshUpdate]);

  return (
    <section className={styles.body}>
      <div className={styles.sectionDetailGame}>
        <div>
          <div className={styles.containerImageMainGame}>
            <h1>{game.name} </h1>

            <img
              className={styles.imgMainGame}
              src={imageCurrent || videoGames.imgMain}
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

          {purchasedGameUser ? (
            <Reviews />
          ) : (
            <p className={styles.text_warning}>
              "To leave your review of the game, we invite you to buy it.😉"
            </p>
          )}
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
              required
            />
            {purchasedGameUser ? ( // si el usuario compro el juego le aparece el boton de comentar sino le aparece el boton de comprar el juego usar esto mismo para el reviews
              <button
                className={`${styles.buttonPostCommentUser} ${
                  Object.entries(error).length &&
                  styles.buttonPostCommentUserDesactived
                }`}
                onClick={handleOpenModalAndViewComment}
              >
                <i className="bi bi-send-check-fill"></i>
              </button>
            ) : (
              <button
                className={`${styles.buttonPostCommentUser} ${
                  Object.entries(error).length &&
                  styles.buttonPostCommentUserDesactived
                }`}
                onClick={alertBuyGame}
              >
                <i className="bi bi-send-check-fill"></i>
              </button>
            )}
          </div>
          {error.commentUser && (
            <p className={styles.alertComments}>
              {error.commentUser}
              <i className="bi bi-exclamation-triangle-fill"></i>
            </p>
          )}
          <div className={styles.containerCommentUserAll}>
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
