import {
  filterCombination,
  filterCombinationGenres,
  searchVideoGame,
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
} from "../actions";

const initialState = {
  videoGamesTop12: [],
  Genre: [],
  copyGenre: [],
  allGames: [], //todos los juegos este estado es el que se modifica
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
  user: {},
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
    default:
      return state;
  }
};
export default rootReducer;
