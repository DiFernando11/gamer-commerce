import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetails, getDetailsGameAdmin } from "../../../redux/actions";
import { uploadImage } from "../../../utils/utils";
import Modal from "../../modal";
import ReusableModal from "../../reusableModal";
import Chart from "../chart";
import styles from "./index.module.css";

const AdminDetailGame = () => {
  const game = useSelector((state) => state.detailsGameAdmin);
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    dispatch(getDetailsGameAdmin(id));
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch, id]);

  const handleChangeImage = (e) => {
    uploadImage(e, setLoading, setImage);
  };
  const handleRefreshImage = () => {
    setInput({ ...input, image: image });
  };
  console.log(image, "url");
  const handleInformationGame = () => {
    setOpenModal(true);
    setInput({
      image: "",
      name: game?.name,
      price: game?.price,
      description: game?.description,
    });
  };
  console.log(input);
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
                src={game.image}
                alt={game.name}
              />
            </div>
            <div className={styles.containerSpanInformationGame}>
              <h4>{game.name}</h4>
              <span>
                <b>Rating:</b> {game.rating}
              </span>
              <span>
                <b>Price:</b> ${game.price}
              </span>
              <span>
                <b>Status:</b>
                {game.show === true ? "Active" : "Inactive"}
              </span>
              <span>
                <b>Total de compras:</b>
                {game.orders?.length}
              </span>
              <span className={styles.textYearsGameDetailAdmin}>
                {game.released}
              </span>
            </div>
          </div>
        </section>
        <div className={styles.containerEstatistics}>
          <Chart
            dimensions={{ widthLineal: 600, heigth: 25, width: 120 }}
          ></Chart>
        </div>
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

          {game.orders?.length
            ? game.orders.map((game, index) => (
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
                  <td className={styles.columnStatusGame}>
                    {game.user?.isBanned === false ? "Active" : "Banned"}
                  </td>
                  <td className={styles.columnStatusGame}>
                    {game.user?.email}
                  </td>
                </tr>
              ))
            : null}
          {openModal ? (
            <ReusableModal title={"UPDATE"}>
              <form className={styles.containerUploadImageGame}>
                <div className={styles.uploadImageContainerFlex}>
                  {/* <img
                    className={styles.imagePhotoUpdateGame}
                    src={game.image}
                  ></img> */}
                  {loading ? (
                    <img
                      className={styles.imagePhotoUpdateGame}
                      src="https://acegif.com/wp-content/uploads/loading-11.gif"
                      alt="gift de carga"
                    />
                  ) : !image ? (
                    <img
                      className={styles.imagePhotoUpdateGame}
                      src={game.image}
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
                          onBlur={handleRefreshImage}
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
                        {" "}
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
                onClick={() => setOpenModal(false)}
              >
                {" "}
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
