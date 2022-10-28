import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetails, getDetailsGameAdmin } from "../../../redux/actions";
import Modal from "../../modal";
import ReusableModal from "../../reusableModal";
import Chart from "../chart";
import styles from "./index.module.css";

const AdminDetailGame = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsGameAdmin(id));
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch, id]);
  const game = useSelector((state) => state.detailsGameAdmin);

  return (
    <main className={styles.bodys}>
      <div className={styles.mainDetailGameAdmin}>
        <section className={styles.sectionInformationGame}>
          <button className={styles.buttonEditInformationGame}>
            <i
              className="bi bi-pencil-square"
              onClick={() => setOpenModal(true)}
            ></i>
          </button>
          <span className={styles.textInformationDetailGame}>Information</span>
          <div className={styles.flexContainerInformationGame}>
            <div className={styles.containerImageDetailGameAdmin}>
              <img src={game.image} alt={game.name} />
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
            <ReusableModal title={"MODAL"}>
              <button onClick={() => setOpenModal(false)}> Close</button>
            </ReusableModal>
          ) : null}
        </tbody>
      </table>
    </main>
  );
};

export default AdminDetailGame;
