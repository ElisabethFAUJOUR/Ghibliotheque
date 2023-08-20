const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = new Router();

router.get("/", mainController.renderHomePage); // "/" : **Home page**
router.get("/movies", mainController.renderFilmsListPage); // "/movies" : **Liste des films**
router.get("/movies/:id", mainController.renderFilmPage); // "/movies/:id" : **Liste des films**

module.exports = router;
