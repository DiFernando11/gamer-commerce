import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanDetails,
  getDetailsGameAdmin,
  updateInformationGame,
} from "../../../redux/actions";
import { uploadImage } from "../../../utils/utils";
import ReusableModal from "../../reusableModal";
import styles from "./index.module.css";
import Swal from "sweetalert2";

const AdminDetailGame = () => {
  const game = useSelector((state) => state.detailsGameAdmin);
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendRefresh, setSendRefresh] = useState(false);
  const [input, setInput] = useState({
    image: "",
    name: "",
    price: 0,
    description: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    uploadImage(e, setLoading, setImage);
  };
  const handleRefreshImage = () => {
    setInput({ ...input, image: image });
  };

  const handleInformationGame = () => {
    setOpenModal(true);
    setInput({
      image: game?.image,
      name: game?.name,
      price: game?.price,
      description: game?.description,
    });
  };
  const handleSubmitInformation = (e) => {
    e.preventDefault();
    dispatch(updateInformationGame(id, input));
    alertSuccesComment();
  };
  const handleCloseModal = () => {
    setImage("");
    setOpenModal(false);
  };
  const alertSuccesComment = () => {
    Swal.fire({
      title: "The information has been successfully updated.",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        setOpenModal(false);
        setSendRefresh(true);
      }
    });
  };
  useEffect(() => {
    dispatch(getDetailsGameAdmin(id));
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch, id, sendRefresh]);

  return (
    <main className={styles.bodys}>
      <div className={styles.mainDetailGameAdmin}>
        <section className={styles.sectionInformationGame}>
          <button className={styles.buttonEditInformationGame}>
            <i
              className="bi bi-pencil-square"
              onClick={handleInformationGame}
            ></i>
          </button>
          <span className={styles.textInformationDetailGame}>Information</span>
          <div className={styles.flexContainerInformationGame}>
            <div className={styles.containerImageDetailGameAdmin}>
              <img
                className={styles.photoGameDatailAdmin}
                src={game?.image}
                alt={game?.name}
              />
            </div>
            <div className={styles.containerSpanInformationGame}>
              <h4>{game?.name}</h4>
              <span>
                <b>Rating:</b> {game?.rating}
              </span>
              <span>
                <b>Price:</b> ${game?.price}
              </span>
              <span>
                <b>Status:</b>
                {game?.show === true ? "Active" : "Inactive"}
              </span>
              <span>
                <b>Total de compras:</b>
                {game?.orders?.length}
              </span>
              <span className={styles.textYearsGameDetailAdmin}>
                {game?.released}
              </span>
            </div>
          </div>
        </section>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>Order #</th>
            <th>User</th>
            <th>User ID</th>
            <th>Transaction date</th>
            <th>User status</th>
            <th>Email user</th>
          </tr>

          {game?.orders?.length
            ? game?.orders?.map((game, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{game?.id}</td>
                  <td className={styles.columnNameGame}>
                    <img
                      className={styles.photoTableUserProfile}
                      src={game.user?.profilePicture}
                      alt={game.user?.name}
                    />
                    <span>{game.user?.name + " " + game.user?.lastname}</span>
                  </td>
                  <td className={styles.columnPriceGame}>{game.user?.id}</td>
                  <td className={styles.columnRatingGame}>{game.creado}</td>
                  <td
                    className={
                      game.user?.isBanned === false
                        ? styles.columnStatusGame
                        : styles.columnStatusGame1
                    }
                  >
                    {game.user?.isBanned === false ? "Active" : "Banned"}
                  </td>
                  <td className={styles.columnPriceGame}>{game.user?.email}</td>
                </tr>
              ))
            : null}
          {openModal ? (
            <ReusableModal title={"UPDATE"}>
              <form
                onSubmit={(e) => handleSubmitInformation(e)}
                className={styles.containerUploadImageGame}
                onBlur={handleRefreshImage}
              >
                <div className={styles.uploadImageContainerFlex}>
                  {/* <img
                    className={styles.imagePhotoUpdateGame}
                    src={game.image}
                  ></img> */}
                  {loading ? (
                    <img
                      className={styles.imagePhotoUpdateGame}
                      src="https://acegif.com/wp-content/uploads/loading-11.gif"
                      alt="loading"
                    />
                  ) : !image ? (
                    <img
                      className={styles.imagePhotoUpdateGame}
                      src={game.image}
                      alt="loading"
                    ></img>
                  ) : (
                    <img
                      src={image}
                      className={styles.imagePhotoUpdateGame}
                      alt="logo User"
                    />
                  )}
                  <div className={styles.uploadImageUserProfilesContainer}>
                    {!image && (
                      <button
                        type="button"
                        className={`container_btn_file ${styles.container_btn_file_user} `}
                      >
                        <label htmlFor="image">
                          <i className="bi bi-file-earmark-arrow-up"></i> update
                        </label>

                        <input
                          type="file"
                          // onChange={saveDataImageProfile}
                          onChange={handleChangeImage}
                          id="image"
                          name="image"
                        />
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.containerInformationFlex}>
                  <div className={styles.containerInformationNameGame}>
                    <label htmlFor="">
                      <span className={styles.labelNamePrice}>Name:</span>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                      />
                    </label>
                    <label htmlFor="" className={styles.labelNamePrice}>
                      <span className={styles.labelNamePrice}> Price</span>

                      <input
                        type="number"
                        name="price"
                        value={input.price}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className={styles.descriptionUpdateGame}>
                    <label htmlFor="">
                      <span className={styles.spanDescription}>
                        Description
                      </span>

                      <textarea
                        name="description"
                        value={input.description}
                        onChange={handleChange}
                      />
                    </label>
                    <button type="submit" onMouseEnter={handleRefreshImage}>
                      Modify data
                    </button>
                  </div>
                </div>
              </form>
              <button
                className={styles.button_close_modal}
                onClick={handleCloseModal}
              >
                Close
              </button>
            </ReusableModal>
          ) : null}
        </tbody>
      </table>
    </main>
  );
};

export default AdminDetailGame;
