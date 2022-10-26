//filtro por precio, genero y año en carrusel de filtros combinados
export const filterCombination = (videoGames, propsFilters) => {
  if (propsFilters.genre === "All" && propsFilters.year === "All") {
    return videoGames
      .filter((videoGame) => videoGame.price < propsFilters.price)
      .slice(0, 12);
  }

  if (propsFilters.genre === "All")
    return videoGames
      .filter(
        (videoGame) =>
          videoGame.price < propsFilters.price &&
          Number(videoGame.released.split("-", 1).join()) ===
            Number(propsFilters.year)
      )
      .slice(0, 12);
  if (propsFilters.year === "All")
    return videoGames
      .filter(
        (videoGame) =>
          videoGame.price < propsFilters.price &&
          videoGame.genres &&
          videoGame.genres
            .map((genre) => genre.name)
            .includes(propsFilters.genre)
      )
      .slice(0, 12);

  return videoGames
    .filter(
      (videoGame) =>
        videoGame.price < propsFilters.price &&
        videoGame.genres &&
        videoGame.genres
          .map((genre) => genre.name)
          .includes(propsFilters.genre) &&
        Number(videoGame.released.split("-", 1).join()) ===
          Number(propsFilters.year)
    )
    .slice(0, 12);
};
export const filterCombinationGenres = (videoGames, propsFilters) => {
  if (propsFilters.genre === "All" && propsFilters.year === "All") {
    return videoGames.filter(
      (videoGame) => videoGame.price < propsFilters.price
    );
  }
  if (propsFilters.genre === "All")
    return videoGames.filter(
      (videoGame) =>
        videoGame.price < propsFilters.price &&
        Number(videoGame.released.split("-", 1).join()) ===
          Number(propsFilters.year)
    );

  if (propsFilters.year === "All")
    return videoGames.filter(
      (videoGame) =>
        videoGame.price < propsFilters.price &&
        videoGame.genre.includes(propsFilters.genre)
    );

  return videoGames.filter(
    (videoGame) =>
      videoGame.price < propsFilters.price &&
      videoGame.genre.includes(propsFilters.genre) &&
      Number(videoGame.realased.split("-", 1).join()) ===
        Number(propsFilters.year)
  );
};

export const pagesCurrent = (videoGames, statePageVideoGame, numberSlice) => {
  if (!videoGames) return [];
  let postsPerPage = numberSlice;
  const lastPostIndex = statePageVideoGame * postsPerPage; // 4 //8
  const firstPostIndex = lastPostIndex - postsPerPage; //0 // 4
  const currentPosts = videoGames.slice(firstPostIndex, lastPostIndex);
  return currentPosts;
};
export const numberPage = (videoGamesLength) => {
  if (!videoGamesLength) return [];
  const pages = [];
  for (let index = 1; index < videoGamesLength + 1; index++) {
    pages.push(index);
  }
  return pages;
};
export const searchVideoGame = (videoGames, gameSearch) => {
  switch (gameSearch) {
    case "":
      return [];
    default:
      return videoGames.filter((game) =>
        game.name.toLowerCase().includes(gameSearch.toString().toLowerCase())
      );
  }
};
export const uploadImage = async (e, stateLoading, stateImage) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "Images");
  stateLoading(true);
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/drkv8ebxx/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const file = await res.json();

  stateImage(file.secure_url);
  stateLoading(false);
};
function escaparRegex(string) {
  return string.replace(/[\\^$.|?*+()[{]/g, "\\$&");
}
export const deleteBadWords = (comment) => {
  var prohibidas = [
    "mala",
    "puta",
    "puto",
    "Baboso",
    "Bellaco",
    "Bobalicón",
    "verga",
    "vrg",
    "hpta",
    "hijo de puta",
    "hijueputa",
    "hp",
    "huevon",
    "mal parido",
    "asco",
    "asqueroso",
    "mierda",
    "mrd",
    "negro",
    "vagina",
    "pene",
    "horroroso",
  ];
  var prohibidasOr = prohibidas.map(escaparRegex).join("|"),
    regex = new RegExp("\\[?\\b(?:" + prohibidasOr + ")\\b\\]?", "gi");
  let resultado = comment.replace(regex, "c&@$#/°");
  return resultado;
};
export const isPurchasedGame = (user, nameGame) => {
  return (
    user &&
    user.orders?.length &&
    user.orders
      .map((game) => game.state === "succeeded" && game.games)
      .flat()
      .map((gameId) => Number(gameId.id))
      .includes(Number(nameGame.id))
  );
};

export const isFavoriteGame = (nameGame) => {
  const favoriteGame = JSON.parse(localStorage.getItem("favorite")) || [];
  return favoriteGame.some((game) => game.id === nameGame?.id);
  // setIsFavorite(favorities);
};
