import axios from 'axios';

export const FILTER_COMBINATION = "FILTER_COMBINATION";
export const GET_GENRES = "GET_GENRES";
export const GET_ALL_GAMES = "GET_ALL_GAMES";



export const filterCombination = (payload) => {
  return {
    type: FILTER_COMBINATION,
    payload,
  };
};


export const getGenres = () => {
  return async function(dispatch){
      try {
          const resGenre = await axios.get(`http://localhost:3001/genre`);
          const genre = resGenre.data;
          return dispatch({
              type: GET_GENRES,
              payload: genre
          })
      } catch (error) {
          console.log(error);
      }
  }
}

export function getAllGames(name) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/search?name"+name)
      .then((res) => {
        return dispatch({
          type: GET_ALL_GAMES,
          payload:  res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

