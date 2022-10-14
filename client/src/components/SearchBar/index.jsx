import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames, getName } from "../../redux/actions";
import "./index.css";


export default function Search({setCurrentPage}) {
    
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  function handleInputChange(e) {
    dispatch(getName(e));
    setCurrentPage(1);
    
  }

console.log(getName)
  return (
    <div>
      <div className="groupa">
        <input
          onChange={(e) => {
            setName(e.target.value);
            handleInputChange(e.target.value);
          }}
          type="text"
          placeholder="Search"
          className="inputa"
          value={name}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}