import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, getName,  } from "../actions";
import "./index.css";
import Card from "../cards";
import { Link } from "react-router-dom";


export default function Search() {
    
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const allGames = useSelector((state) => state.games);
  const [currentPage, setCurrentPage] = useState(1); //pagina actual
 const [gamesPerPage, setGamesPerPage] = useState(4);//videos por pagina
 const indexOfLastGame = currentPage * gamesPerPage; 
 const indexOfFirstGame = indexOfLastGame - gamesPerPage; 
 const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);


  // useEffect(() => {
  //   dispatch(getAllGames());
  // }, [dispatch]);

  function handleInputChange(e) {
    dispatch(getName(e));
    
    
  }


  return (
    <div class="flex-container">
      <input></input>
      {/* <div className="groupa">
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
       <button className="searchBtn"  type="submit" >
            <img
            src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
             width="20px"
             height="20px"
            alt="search game"
            />
            </button>
      </div>
      <div className="carta">
        {currentGames?.map((e) => {
            return (
             
              <Link  to={`/home/${e.id}`} key={e.id}>
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  background_image={e.image}
                />
              </Link> 
            )
        })} 
      </div> */}
      </div>



    
  );
}