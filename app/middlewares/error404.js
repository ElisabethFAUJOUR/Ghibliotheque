const render404Page = (req, res) => {
  res.status(404).render("error", { message: "Sorry, there is nothing here." });
};

module.exports = render404Page;
