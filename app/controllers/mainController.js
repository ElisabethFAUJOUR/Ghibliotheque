const movies = require("../../data/films.json");

const mainController = {
  renderHomePage(req, res) {
    res.render("index");
  },

  renderFilmsListPage(req, res) {
    res.render("movies-list");
  },

  renderFilmPage(req, res) {
    const id = parseInt(req.params.id);
    const foundMovie = movies.find(movie => movie.id === id);
    res.render("movie", { movie: foundMovie });
  },

  renderSearchPage(req, res) {
    const title = req.query.title;
    const searchTitle = title.toLowerCase();

    let requestedMovie = movies.filter(movie => movie.title.toLowerCase().includes(searchTitle));

    res.render("movies-list", {movies : requestedMovie});
  }
};

module.exports = mainController;
