import { filterCombination, filterCombinationGenres } from "../../utils/utils";

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
} from "../actions";

const initialState = {
  CopyVideoGames: [
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 300,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 1200,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1400,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1800,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 600,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 800,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 80,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 50,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 20,
      genre: "Accion",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 10,
      genre: "Accion",
    },
  ],
  videoGames: [
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 300,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 1200,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1400,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1800,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 600,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 800,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 80,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 50,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 20,
      genre: "Accion",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 10,
      genre: "Accion",
    },
  ],
  Genre: [],
  copyGenre: [],
  allGames: [], //todos los juegos este estado es el que se modifica
  games: [], //copia del estado  siempre tenga todos los juegos y los recarga de nuevo
  Details: {},
  videoGames1: [
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 300,
      genre: "Musica",
    },
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 1200,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1400,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1800,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 600,
      genre: "Romantica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 800,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 80,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 50,
      genre: "Infantil",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 20,
      genre: "Accion",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 10,
      genre: "Accion",
    },
  ],
  genreFilters: [], //juegos filtrados por categoria
  games12Slice: [],
  stateRefreshUpdate: false, //pueden refrescar estados por medio de este estado global
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
        videoGames: action.payload,
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

    case POST_GAME: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default rootReducer;
