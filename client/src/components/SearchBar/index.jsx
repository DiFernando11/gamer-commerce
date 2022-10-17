import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchGame } from "../../redux/actions";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";

export default function Search() {
  const [inputSearch, setInputSearch] = useState("");
  const searchGames = useSelector((state) => state.searchGames);
  // console.log(searchGames);
  const dispatch = useDispatch();

  const handleSearchGame = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
    switch (inputSearch.length) {
      case 1:
        dispatch(searchGame(""));
        break;
      case 0:
        dispatch(searchGame(e.target.value));
        break;
      default:
        dispatch(searchGame(inputSearch));
    }
  };
  const blurInpuTextSearch = () => {
    setInputSearch("");
  };
  return (
    <div className={styles.flex_container}>
      <input
        type="text"
        onChange={(e) => handleSearchGame(e)}
        onBlur={() => blurInpuTextSearch()}
        value={inputSearch}
      />
    </div>
  );
}
