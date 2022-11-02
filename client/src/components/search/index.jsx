import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../../redux/actions";
import styles from "./index.module.css";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearchGame = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
    dispatch(searchGame(e.target.value));
  };

  const blurInpuTextSearch = (e) => {
    e.preventDefault();
    setInputSearch("");
    setTimeout(() => {
      dispatch(searchGame(""));
    }, 100);
  };
  
  return (
    <div className={styles.flex_containerInputSearch}>
      <i className="bi bi-search iconMobileSearch"></i>
      <input
        className={styles.searchGameInput}
        type="text"
        onChange={(e) => handleSearchGame(e)}
        onBlur={(e) => blurInpuTextSearch(e)}
        placeholder="Search..."
        value={inputSearch}
      />
    </div>
  );
}
