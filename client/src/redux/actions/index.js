import axios from 'axios';

export const FILTER_COMBINATION = "FILTER_COMBINATION";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_TOP_12 = "GET_TOP_12";
export const GET_TEN_GAMES = "GET_TEN_GAMES";


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

export const getDetails = (id) => {
  return async function(dispatch){
      try {
          const resDetails = await axios.get(`http://localhost:3001/detail/${id}`);
          const details = resDetails.data;
          return dispatch({
              type: GET_DETAILS,
              payload: details
          })
      } catch (error) {
          console.log(error);
      }
  }
}


export const getTenGames = () => {
  return async function(dispatch){
      try {
          const games = await axios.get(`http://localhost:3001/filtered?type=random`);
          const res = games.data;
          return dispatch({
              type: GET_TEN_GAMES,
              payload: res
          })
      } catch (error) {
          console.log(error);
      }
  }
}


export const getTop12 = () => {
    return async function(dispatch){
        try {
            const games = await axios.get(`http://localhost:3001/filtered?type=top12`);
            const res = games.data;
            return dispatch({
                type: GET_TOP_12,
                payload: res
            })
        } catch (error) {
            console.log(error);
        }
    }
  }

