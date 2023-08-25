// ---- Imports ----
const express = require("express");
const app = express();
const router = require("./app/router");
const addMoviesToLocals = require("./app/middlewares/localsMovies");
const render404Page = require("./app/middlewares/error404");

// Body parser
app.use(express.urlencoded({ extended: true }));

// ---- Setting ----
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("./public"));

// ---- Middleware locals data ----
app.use(addMoviesToLocals);

// ---- Routes ----
app.use(router);

// ---- Middleware error 404 -----
app.use(render404Page);

// ---- Listen server ----
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
