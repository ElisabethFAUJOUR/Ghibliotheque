const movies = require("../../data/films.json");

const addMoviesToLocals = (req, res, next) => {
  res.locals.movies = movies;
  next();
};

module.exports = addMoviesToLocals;
