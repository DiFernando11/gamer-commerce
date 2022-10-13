//filtro por precio, genero y año en carrusel de filtros combinados
export const filterCombination = (videoGames, propsFilters) => {
  if (propsFilters.genre === "All" && propsFilters.year === "All") {
    return videoGames.filter(
      (videoGame) => videoGame.price < propsFilters.price
    );
  }
  if (propsFilters.genre === "All")
    return videoGames.filter(
      (videoGame) =>
        videoGame.price < propsFilters.price &&
        Number(videoGame.year) === Number(propsFilters.year)
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
      Number(videoGame.year) === Number(propsFilters.year)
  );
};

export const pagesCurrent = (videoGames, statePageVideoGame, numberSlice) => {
  let postsPerPage = numberSlice;
  const lastPostIndex = statePageVideoGame * postsPerPage; // 4 //8
  const firstPostIndex = lastPostIndex - postsPerPage; //0 // 4
  const currentPosts = videoGames.slice(firstPostIndex, lastPostIndex);
  return currentPosts;
};
export const numberPage = (videoGamesLength) => {
  const pages = [];
  for (let index = 1; index < videoGamesLength + 1; index++) {
    pages.push(index);
  }
  return pages;
};
