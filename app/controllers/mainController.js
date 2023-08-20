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
  }
};

module.exports = mainController;
