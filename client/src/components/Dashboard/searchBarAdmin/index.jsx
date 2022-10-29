import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchGameAdminDashboard,
  searchOrdersAdminDashboard,
  searchUserAdminDashboard,
} from "../../../redux/actions";

function SearchBarAdmin() {
  const [inputSearch, setInputSearch] = useState("");
/*   const user = useSelector((state) => state.user);
  console.log(user); */
  const dispatch = useDispatch();

  const handleSearchGame = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);

    const searchPathName = window.location.pathname;
    switch (searchPathName) {
      case "/admin/games":
        dispatch(searchGameAdminDashboard(e.target.value));
        break;
      case "/admin/user":
        dispatch(searchUserAdminDashboard(e.target.value));
        break;
      case "/admin/orders":
        dispatch(searchOrdersAdminDashboard(e.target.value));
        break;
      default:
        break;
    }
  };
  const blurInpuTextSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onBlur={blurInpuTextSearch}
        onChange={(e) => handleSearchGame(e)}
        value={inputSearch}
      />
    </div>
  );
}

export default SearchBarAdmin;
