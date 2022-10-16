import { filterCombination } from "../../utils/utils";
import {
  FILTER_COMBINATION,
  GET_DETAILS,
  GET_FILTER_GENRES,
  GET_GENRES,
  GET_TOP_12,
  REFRESH_STATE,
} from "../actions";
const initialState = {
  CopyVideoGames: [
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
      year: 2002,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 300,
      genre: "Musica",
      year: 2005,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 1200,
      genre: "Romantica",
      year: 2002,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1400,
      genre: "Romantica",
      year: 2002,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1800,
      genre: "Romantica",
      year: 2008,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 600,
      genre: "Romantica",
      year: 2008,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 800,
      genre: "Infantil",
      year: 2002,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 80,
      genre: "Infantil",
      year: 2008,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 50,
      genre: "Infantil",
      year: 2015,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 20,
      genre: "Accion",
      year: 2015,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 10,
      genre: "Accion",
      year: 2020,
    },
  ],
  videoGames: [
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
      year: 2002,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 300,
      genre: "Musica",
      year: 2005,
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 1200,
      genre: "Romantica",
      year: 2002,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1400,
      genre: "Romantica",
      year: 2002,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 1800,
      genre: "Romantica",
      year: 2008,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 600,
      genre: "Romantica",
      year: 2008,
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
      price: 800,
      genre: "Infantil",
      year: 2002,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 80,
      genre: "Infantil",
      year: 2008,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 50,
      genre: "Infantil",
      year: 2015,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 20,
      genre: "Accion",
      year: 2015,
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
      price: 10,
      genre: "Accion",
      year: 2020,
    },
  ],
  Genre: [],
  allGames: [], //todos los juegos este estado es el que se modifica
  games: [], //copia del estado  siempre tenga todos los juegos y los recarga de nuevo
  Details: {},
  genreFilters: [], //juegos filtrados por categoria
  stateRefreshUpdate: false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_COMBINATION: {
      return {
        ...state,
        videoGames: filterCombination(state.CopyVideoGames, action.payload),
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

    case GET_TOP_12: {
      return {
        ...state,
        games: action.payload,
      };
    }
    case GET_FILTER_GENRES: {
      return {
        ...state,
        genreFilters: action.payload,
      };
    }
    case REFRESH_STATE: {
      return {
        ...state,
        stateRefreshUpdate: !state.stateRefreshUpdate,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
