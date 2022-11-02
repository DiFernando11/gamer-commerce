import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateInfo,
  getallUser,
  filterUsers,
  changeBannedUser,
} from "../../../redux/actions";
import styles from "./index.module.css";
import Swal from "sweetalert2";

const Adminusers = () => {
  const [users, setUsers] = React.useState("");
  let dispatch = useDispatch();
  //   const [active, setActive] = React.useState(false);
  const allUsersfiltered = useSelector((state) => state.allUsersFilters);
  const [viewElements, setViewElements] = useState(1);
  let postsPerPage = 20;
  const lastPostIndex = viewElements * postsPerPage; // 4 //8
  const currentPosts = allUsersfiltered?.slice(0, lastPostIndex);
  const [refreshUpdate, setRefreshUpdate] = useState(false);
  useEffect(() => {
    dispatch(getallUser());
  }, [dispatch]);

  const handleFilterUser = (idCheckbox, e) => {
    var isChecked = document.getElementById(idCheckbox).checked;
    if (!isChecked) {
      setUsers("Restart");
      dispatch(getallUser());
    } else {
      setUsers(e.target.value);
      dispatch(filterUsers(e.target.value));
    }
  };

  const deleteUser = (id, banned) => {
    Swal.fire({
      html: banned
        ? `<h2>You are going to unban User #${id} <br /> Are you sure?</h2>`
        : `<h2>You are going to ban User #${id} <br /> Are you sure?</h2>`,
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Accept",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateInfo(id, banned));
        dispatch(changeBannedUser(id));
        setRefreshUpdate(!refreshUpdate);
        // window.location.replace(`/admin/user/${id}`);
      }
    });
  };

  return (
    <section className={styles.mainGamesAllDashboard}>
      <div className={styles.checkboxes}>
        <div>
          <label>Banned</label>
          <input
            className="form-check-input"
            id="Banned"
            type="checkbox"
            value="Banned"
            checked={users === "Banned" ? true : false}
            onChange={(e) => handleFilterUser("Banned", e)}
          />
        </div>
        <div>
          <label>Active best users</label>
          <input
            className="form-check-input"
            id="Active"
            type={"checkbox"}
            value="Active"
            checked={users === "Active" ? true : false}
            onChange={(e) => handleFilterUser("Active", e)}
          />
        </div>
        <div>
          <label>Best users</label>
          <input
            className="form-check-input"
            id="Best users"
            type={"checkbox"}
            value="Best users"
            checked={users === "Best users" ? true : false}
            onChange={(e) => handleFilterUser("Best users", e)}
          />
        </div>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
            <th>Create</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
		  
          {currentPosts.length
            ? currentPosts.map((user, index) => (
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
                  <td className={styles.columnPriceGame}>{user.creado}</td>
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
                        {user.isBanned === false ? "Ban" : "Unban"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <span
        className={styles.seeMore}
        onClick={() => setViewElements(viewElements + 1)}
      >
        See More
      </span>
    </section>
  );
};

export default Adminusers;
