const movies = require("../../data/films.json");

const mainController = {
  renderHomePage(req, res) {
    res.render("index");
  },

  renderFilmsListPage(req, res) {
    res.render("movies-list");
  },

  renderFilmPage(req, res) {
    try {
      const id = parseInt(req.params.id);
      const foundMovie = movies.find(movie => movie.id === id);

      if (isNaN(id)) {
        throw new Error("Invalid ID");
      }

      if (!foundMovie) {
        throw new Error("Movie not found");
      }

      res.render("movie", { movie: foundMovie });
    } catch (error) {
      res.status(404).render("error", { message: "Sorry, there is nothing here." });
    }
  }
};

module.exports = mainController;
