import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteuser, getallUser } from "../../../redux/actions";
import styles from "./index.module.css";


const Adminusers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  let dispatch = useDispatch();
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    return () => dispatch(getallUser());
  }, [dispatch, getallUser, active]);

  const deleteUser = (id, banned) => {
    dispatch(deleteuser(id, banned));
    setActive(!active);
  };

  return (
    <section className={styles.mainGamesAllDashboard}>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
            <th>Create</th>
            <th>Status</th>
          </tr>

          {allUsers.length
            ? allUsers.map((user, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{user.id}</td>
                  <td className={styles.columnNameGame}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/admin/user/${user.id}`}
                    >
                      <img src={user.profilePicture} alt={user.id} />
                      <span>{user.name + " " + user.lastname}</span>
                    </Link>
                  </td>
                  <td className={styles.columnPriceGame}>{user.email}</td>
                  <td className={styles.columnRatingGame}>
                    {user.age ? user.age : "-"}
                  </td>
                  <td className={styles.columnStatusGame}>{user.creado}</td>
                  <td
                    className={
                      user.isBanned === false
                        ? styles.columnStatusGame
                        : styles.isBanned
                    }
                  >
                    {user.isBanned === false ? "Active" : "Banned"}
                  </td>
                  <td className={styles.columnActionGame}>
                    <div>
                      <Link
                        style={{ textDecoration: "none", padding: "5px" }}
                        to={`/admin/user/${user.id}`}
                      >
                        <span className={styles.columnActionView}>View</span>
                      </Link>
                      <button
                        className={styles.columnActionDelete}
                        type="submit"
                        onClick={() => deleteUser(user.id, user.isBanned)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </section>
  );
};

export default Adminusers;
