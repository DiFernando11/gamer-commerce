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
    setInputSearch("");
    dispatch(searchGame(""))
  };
  return (
    <div className={styles.flex_container}>
      <input
        type="text"
        onChange={(e) => handleSearchGame(e)}
        onBlur={(e) => blurInpuTextSearch(e)}
        value={inputSearch}
      />
    </div>
  );
}
