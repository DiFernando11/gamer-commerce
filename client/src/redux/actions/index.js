import axios from "axios";
export const FILTER_COMBINATION = "FILTER_COMBINATION";
export const FILTER_COMBINATIONGENRES = "FILTER_COMBINATIONGENRES";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAILS = "GET_DETAILS";
export const GET_TOP_12 = "GET_TOP_12";
export const GET_FILTER_GENRES = "GET_FILTER_GENRES";
export const REFRESH_STATE = "REFRESH_STATE";
export const GET_TEN_GAMES = "GET_TEN_GAMES";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_FILTER_12_SLICE = "GET_FILTER_12_SLICE";
export const POST_GAME = "POST_GAME";
export const SEARCH_GAME = "SEARCH_GAME";
export const REGISTER = "REGISTER";
export const GOOGLE_SIGN = "GOOGLE_SIGN";
export const TOP_PRICE_GAME = "TOP_PRICE_GAME";
export const TOP_GENRES_GAME = "TOP_GENRES_GAME";
export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const POST_COMMENT_USER = "POST_COMMENT_USER";
export const CLEAR_LOGOUT_USER = "CLEAR_LOGOUT_USER";
export const ROLE_SINGIN_SAVE_STORAGE = "ROLE_SINGIN_SAVE_STORAGE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const UPDATE_DATA_USER_PROFILE = "UPDATE_DATA_USER_PROFILE";
export const NUMBER_GAMES_CART = "NUMBER_GAMES_CART";
export const IS_PURCHASED_GAME = "IS_PURCHASED_GAME";
export const ALL_ORDERS = "ALL_ORDERS";
export const DELETE_USER = "DELETE_USER";
export const SEARCH_GAME_ADMIN = "SEARCH_GAME_ADMIN";
export const SEARCH_USER_ADMIN = "SEARCH_USER_ADMIN";
export const SEARCH_ORDERS_ADMIN = "SEARCH_ORDERS_ADMIN";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const DELETE_GAME = "DELETE_GAME";
export const GET_DETAILS_GAME_ADMIN = "GET_DETAILS_GAME_ADMIN";

export const filterCombination = (payload) => {
  return {
    type: FILTER_COMBINATION,
    payload,
  };
};
export const filterCombinationGenres = (payload) => {
  return {
    type: FILTER_COMBINATIONGENRES,
    payload,
  };
};

export const getGenres = () => {
  return async function (dispatch) {
    try {
      const resGenre = await axios.get(`/genre`);
      const genre = resGenre.data;
      return dispatch({
        type: GET_GENRES,
        payload: genre,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetails = (id) => {
  return async function (dispatch) {
    try {
      const resDetails = await axios.get(`/detail/${id}`);
      const details = resDetails.data;
      return dispatch({
        type: "GET_DETAILS",
        payload: details,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTenGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`/filtered?type=random`);
      const res = games.data;
      return dispatch({
        type: GET_TEN_GAMES,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTop12 = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`/filtered?type=top12`);
      const res = games.data;
      return dispatch({
        type: GET_TOP_12,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterGenres = (genreFilter) => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`/genre/${genreFilter}`);
      const response = games.data;
      return dispatch({
        type: GET_FILTER_GENRES,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`/filtered?type=all`);
      const res = games.data;
      return dispatch({
        type: GET_ALL_GAMES,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setRefreshUpdate = () => {
  return {
    type: REFRESH_STATE,
  };
};

export const slice12Games = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(`/filtered?type=all`);
      const res = games.data.slice(48, 60);
      return dispatch({
        type: GET_FILTER_12_SLICE,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (input) => {
  return async function (dispatch) {
    try {
      const registro = await axios.post("/signup", input);
      return dispatch({
        type: REGISTER,
        payload: registro.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const googleSign = (input) => {
  return async function (dispatch) {
    try {
      const google = await axios.post("/googlesign", input);
      return dispatch({
        type: GOOGLE_SIGN,
        payload: google.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createGame = (payload) => async (dispatch) => {
  try {
    const res = await axios.post("/creategame", payload);
    return dispatch({
      type: POST_GAME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchGame = (payload) => {
  return {
    type: SEARCH_GAME,
    payload,
  };
};

export const topGenrresGames = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/genre/${payload}?type=top`);
      return dispatch({
        type: TOP_GENRES_GAME,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const topPriceGame = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`/filtered?type=topPrice`);
      return dispatch({
        type: TOP_PRICE_GAME,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postLogin = (payload) => {
  return async function (dispatch) {
    try {
      const res = await axios.post(`/signin`, payload);
      return dispatch({
        type: POST_USER_LOGIN,
        payload: res.data,
      });
    } catch (error) {
      return dispatch({
        type: POST_USER_LOGIN,
        payload: error.response.data,
      });
    }
  };
};
export const LogOutUser = (payload) => {
  return {
    type: CLEAR_LOGOUT_USER,
    payload,
  };
};
export const roleSignSaveStorage = (payload) => {
  return {
    type: ROLE_SINGIN_SAVE_STORAGE,
    payload,
  };
};

export const postCommentUser = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/newcomment", payload);
      return dispatch({
        type: POST_COMMENT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getallUser = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/allusers");
      return dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateDataUserProfile = (id, atributte, data) => {
  return async (dispatch) => {
    const response = await axios.patch(
      `/user/update/${id}?atribbute=${atributte}&data=${data}`
    );
    return dispatch({
      type: UPDATE_DATA_USER_PROFILE,
      payload: response.data,
    });
  };
};
export const getUserProfile = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/user/${id}`);
    return dispatch({
      type: GET_USER_PROFILE,
      payload: response.data,
    });
  };
};

export const numberGamesCarts = (payload) => {
  return {
    type: NUMBER_GAMES_CART,
    payload,
  };
};

export const isPurchasedGameSome = (user, nameGame) => {
  return {
    type: IS_PURCHASED_GAME,
    payload: { user, nameGame },
  };
};

export const getAllOrders = () => {
  return async (dispatch) => {
    const response = await axios.get("/orders");
    return dispatch({
      type: ALL_ORDERS,
      payload: response.data,
    });
  };
};

export const deleteuser = (id, banned) => {
  console.log(id, banned, "action");
  return async (dispatch) => {
    if (banned === true) {
      const response = await axios.put(`/update/user/${id}?banned=false`);
      return dispatch({
        type: DELETE_USER,
        payload: response.data,
      });
    } else {
      const response = await axios.put(`/update/user/${id}?banned=true`);
      return dispatch({
        type: DELETE_USER,
        payload: response.data,
      });
    }
  };
};

export const searchGameAdminDashboard = (payload) => {
  return {
    type: SEARCH_GAME_ADMIN,
    payload,
  };
};
export const searchUserAdminDashboard = (payload) => {
  return {
    type: SEARCH_USER_ADMIN,
    payload,
  };
};
export const searchOrdersAdminDashboard = (payload) => {
  return {
    type: SEARCH_ORDERS_ADMIN,
    payload,
  };
};

export const cleanDetails = () => {
  return {
    type: CLEAN_DETAILS,
  };
}

export const deleteGame = (id, banned) => {
  console.log(id, banned, "action");
  return async (dispatch) => {
    if (banned===false) {
      console.log("entro al if")
      const response = await axios.put(`/update/game/${id}?show=true`);
      return dispatch({
        type: DELETE_GAME,
        payload: response.data,
      });
    } else {
      const response = await axios.put(`/update/game/${id}?show=false`);
      return dispatch({
        type: DELETE_GAME,
        payload: response.data,
      });
    }
  };
}

export const getDetailsGameAdmin = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/purcheses/${id}`);
    return dispatch({
      type: GET_DETAILS_GAME_ADMIN,
      payload: response.data,
    });
  };
}
