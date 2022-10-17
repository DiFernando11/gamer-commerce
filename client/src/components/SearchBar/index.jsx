import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames  } from "../../redux/actions";
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

  useEffect(()=>{ //trae el estado cuando el componente se monta
    dispatch( getAllGames())  
},[dispatch] )

 function handleInputChange(e){ //esta funcion guarda en el estado local lo que llega en el input
  e.preventDefault()
  setName(e.target.value)
  console.log(name)
}
function handleSubmit(e){
  e.preventDefault()
  dispatch(getAllGames(name))//este es mi estado local
}

  

console.log(currentGames)
  return (
      <div className="groupa">
        <div className="groupa"> 
            <input
            type="text"
            placeholder="Buscar..."
            onChange={(e)=>handleInputChange(e)}
            className = "inputa"
            />
            <button className="searchBtn"  type="submit" onClick={(e)=>handleSubmit(e)} >
            <img
            src="https://cdn-icons-png.flaticon.com/512/151/151773.png"
             width="20px"
             height="20px"
            alt="search game"
            />
        </button>
            </div> 
      <div className="carta">
        {currentGames.map((e) => {
            return (
              <Link  to={`/home/${e.id}`} key={e.id}>
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.image}
                />
              </Link> 
            )
        })} 
      </div>
      </div>
      



    
  );
}