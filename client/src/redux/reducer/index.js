import {
  changeBannedUser,
  changeStateGameUser,
  filterCombination,
  filterCombinationGenres,
  filterOrdersAdmin,
  filterUsersAdmin,
  isPurchasedGame,
  orderGameAmountAdmin,
  searchOrdersAdmin,
  searchUserAdmin,
  searchVideoGame,
  searchVideoGameAdmin,
} from "../../utils/utils";

import {
  FILTER_COMBINATION,
  GET_DETAILS,
  GET_FILTER_GENRES,
  GET_GENRES,
  GET_TOP_12,
  GET_TEN_GAMES,
  REFRESH_STATE,
  GET_FILTER_12_SLICE,
  GET_ALL_GAMES,
  FILTER_COMBINATIONGENRES,
  POST_GAME,
  SEARCH_GAME,
  REGISTER,
  TOP_GENRES_GAME,
  TOP_PRICE_GAME,
  POST_COMMENT_USER,
  POST_USER_LOGIN,
  CLEAR_LOGOUT_USER,
  ROLE_SINGIN_SAVE_STORAGE,
  GOOGLE_SIGN,
  GET_ALL_USERS,
  UPDATE_DATA_USER_PROFILE,
  GET_USER_PROFILE,
  NUMBER_GAMES_CART,
  IS_PURCHASED_GAME,
  ALL_ORDERS,
  CLEAN_DETAILS,
  DELETE_USER,
  SEARCH_GAME_ADMIN,
  SEARCH_USER_ADMIN,
  SEARCH_ORDERS_ADMIN,
  DELETE_GAME,
  GET_FILTERS_ORDERS,
  GET_DETAILS_GAME_ADMIN,
  ORDER_AMOUNT_GAME_ADMIN,
  GET_USER_PROFILE_ADMIN,
  CLEAN_STATE_ACTIVITY_USER,
  GET_FILTERS_USERS,
  UPDATE_PROFILE_USER,
  UPDATE_INFORMATION_GAME,
  POST_ADD_CARTDB,
  GET_CART_USER,
  DELETE_CART_USER,
  GET_FAVORITE_USER,
  MERGE_LOGIN_LOGOUT_CART,
  GET_TODAY,
  GET_CHART_INFO,
  POST_REVIEW,
  SEND_EMAIL,
  GET_REVIEWS,
  DELETE_YOUR_CART,
  DELETE_YOUR_FAVS,
  CHANGE_STATUS_GAME,
  CHANGE_BANNED_USER,
  REFRESH_PURCHASEDGAME,
} from "../actions";

const initialState = {
  videoGamesTop12: [],
  Genre: [],
  copyGenre: [],
  allGames: [], //todos los juegos este estado es el que se modifica
  copyAllGames: [], //copia de todos los juegos
  games: [], //copia del estado  siempre tenga todos los juegos y los recarga de nuevo
  Details: {},
  genreFilters: [], //juegos filtrados por categoria
  games12Slice: [],
  gamesTopGenrresGame: [],
  searchGames: [],
  stateRefreshUpdate: false, //pueden refrescar estados por medio de este estado global
  responseActions: "", //aqui pueden almacenar las respuestas del backend para mostrarlas al usuario
  registered: {},
  userSignIn: [],
  roleSignInSaveStorage: {},
  allUsers: [],
  copyAllUsers: [],
  user: {},
  isPurchased: false,
  numberGameCart: 0,
  allOrders: [],
  copyAllOrders: [],
  detailsGameAdmin: {},
  activityUser: {},
  allOrdersFilters: [],
  allUsersFilters: [],
  cartUser: [],
  favoriteUser: [],
  today: [],
  chartInfo: [],
  email: {},
  getReview: {},
  refreshPurchasedGame: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COMBINATION: {
      return {
        ...state,
        games12Slice: filterCombination(state.allGames, action.payload),
      };
    }
    case FILTER_COMBINATIONGENRES: {
      return {
        ...state,
        genreFilters: filterCombinationGenres(state.copyGenre, action.payload),
      };
    }
    case GET_GENRES: {
      return {
        ...state,
        Genre: action.payload,
      };
    }

    case GET_DETAILS: {
      return {
        ...state,
        Details: action.payload,
      };
    }

    case GET_TEN_GAMES: {
      return {
        ...state,
        games: action.payload,
      };
    }
    case GET_FILTER_GENRES: {
      return {
        ...state,
        genreFilters: action.payload,
        copyGenre: action.payload,
      };
    }
    case REFRESH_STATE: {
      return {
        ...state,
        stateRefreshUpdate: !state.stateRefreshUpdate,
      };
    }

    case GET_TOP_12: {
      return {
        ...state,
        videoGamesTop12: action.payload,
      };
    }
    case GET_ALL_GAMES: {
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      };
    }
    case GET_FILTER_12_SLICE: {
      return {
        ...state,
        games12Slice: action.payload,
      };
    }
    case TOP_GENRES_GAME: {
      return {
        ...state,
        gamesTopGenrresGame: action.payload,
      };
    }
    case TOP_PRICE_GAME: {
      return {
        ...state,
        games12Slice: action.payload,
      };
    }
    case POST_GAME: {
      return {
        ...state,
      };
    }
    case POST_COMMENT_USER: {
      return {
        ...state,
        responseActions: action.payload,
      };
    }

    case SEARCH_GAME: {
      return {
        ...state,
        searchGames: searchVideoGame(state.allGames, action.payload),
      };
    }

    case REGISTER: {
      return {
        ...state,
        registered: action.payload,
      };
    }

    case POST_USER_LOGIN: {
      return {
        ...state,
        userSignIn: action.payload,
      };
    }
    case GOOGLE_SIGN: {
      return {
        ...state,
        userSignIn: action.payload,
      };
    }
    case CLEAR_LOGOUT_USER: {
      return {
        ...state,
        userSignIn: [],
      };
    }
    case ROLE_SINGIN_SAVE_STORAGE: {
      return {
        ...state,
        roleSignInSaveStorage: action.payload,
      };
    }
    case GET_ALL_USERS: {
      return {
        ...state,
        allUsers: action.payload,
        copyAllUsers: action.payload,
        allUsersFilters: action.payload,
      };
    }
    case GET_USER_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UPDATE_DATA_USER_PROFILE: {
      return {
        ...state,
        responseActions: action.payload,
      };
    }
    case NUMBER_GAMES_CART: {
      return {
        ...state,
        numberGameCart: action.payload,
      };
    }

    case IS_PURCHASED_GAME: {
      return {
        ...state,
        isPurchased: isPurchasedGame(
          action.payload.user,
          action.payload.nameGame
        ),
      };
    }
    case ALL_ORDERS: {
      return {
        ...state,
        allOrders: action.payload,
        copyAllOrders: action.payload,
        allOrdersFilters: action.payload,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
      };
    }
    case SEARCH_GAME_ADMIN: {
      return {
        ...state,
        allGames: searchVideoGameAdmin(state.copyAllGames, action.payload),
      };
    }

    case SEARCH_USER_ADMIN: {
      return {
        ...state,
        allUsersFilters: searchUserAdmin(state.copyAllUsers, action.payload),
      };
    }
    case SEARCH_ORDERS_ADMIN: {
      return {
        ...state,
        allOrdersFilters: searchOrdersAdmin(
          state.copyAllOrders,
          action.payload
        ),
      };
    }
    case CLEAN_DETAILS: {
      return {
        ...state,
        Details: {},
      };
    }
    case DELETE_GAME: {
      return {
        ...state,
      };
    }
    case GET_DETAILS_GAME_ADMIN: {
      return {
        ...state,
        detailsGameAdmin: action.payload,
      };
    }
    case ORDER_AMOUNT_GAME_ADMIN: {
      return {
        ...state,
        allGames: orderGameAmountAdmin(
          action.payload,
          action.atribbute,
          state.copyAllGames
        ),
      };
    }

    case GET_USER_PROFILE_ADMIN: {
      return {
        ...state,
        activityUser: action.payload,
      };
    }
    case CLEAN_STATE_ACTIVITY_USER: {
      return {
        ...state,
        activityUser: {},
      };
    }
    case GET_FILTERS_ORDERS: {
      return {
        ...state,
        allOrders: filterOrdersAdmin(action.payload, state.copyAllOrders),
      };
    }

    case GET_FILTERS_USERS: {
      const result = filterUsersAdmin(action.payload, state.allUsers);
      return {
        ...state,
        allUsersFilters: result,
      };
    }
    case UPDATE_INFORMATION_GAME: {
      return {
        ...state,
      };
    }

    case UPDATE_PROFILE_USER: {
      return {
        ...state,
      };
    }
    case POST_ADD_CARTDB: {
      return {
        ...state,
      };
    }
    case GET_CART_USER: {
      return {
        ...state,
        cartUser: action.payload,
      };
    }
    case GET_FAVORITE_USER: {
      return {
        ...state,
        favoriteUser: action.payload,
      };
    }
    case DELETE_CART_USER: {
      return {
        ...state,
      };
    }

    case MERGE_LOGIN_LOGOUT_CART: {
      return {
        ...state,
      };
    }

    case GET_TODAY: {
      return {
        ...state,
        today: action.payload,
      };
    }
    case GET_CHART_INFO: {
      return {
        ...state,
        chartInfo: action.payload,
      };
    }
    case POST_REVIEW: {
      return {
        ...state,
      };
    }

    case SEND_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case GET_REVIEWS: {
      return {
        ...state,
        getReview: action.payload,
      };
    }
    case DELETE_YOUR_CART: {
      return {
        ...state,
      };
    }
    case DELETE_YOUR_FAVS: {
      return {
        ...state,
      };
    }
    case CHANGE_STATUS_GAME: {
      return {
        ...state,
        allGames: changeStateGameUser(
          state.copyAllGames,
          action.payload,
          action.discount
        ),
      };
    }
    case CHANGE_BANNED_USER: {
      return {
        ...state,
        allUsersFilters: changeBannedUser(state.allUsers, action.payload),
      };
    }
    case REFRESH_PURCHASEDGAME: {
      return {
        ...state,
        refreshPurchasedGame: !state.refreshPurchasedGame,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
