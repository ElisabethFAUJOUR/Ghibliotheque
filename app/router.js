const { Router } = require("express");
const mainController = require("./controllers/mainController");

const router = new Router();

router.get("/", mainController.renderHomePage); // "/" : **Home page**
router.get("/films", mainController.renderFilmsListPage); // "/films" : **Liste des films**
router.get("/films/:id", mainController.renderFilmPage); // "/films/:id" : **Liste des films**
router.get("/search", mainController.renderSearchPage); // "/search?q="nom du film"

module.exports = router;
