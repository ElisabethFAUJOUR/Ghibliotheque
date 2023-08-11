const render404Page = (req, res) => {
  res.status(404).render("error");
};

module.exports = render404Page;
