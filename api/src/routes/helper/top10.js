const topTen = (info) => {
    const top = info.sort(function (a, b) {
        if (a.rating > b.rating) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      }).slice(0, 10)
      return top
}
module.exports = { topTen }