const db = require("../models");

// Defining methods for the controller
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      // .select('???')
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      headline: req.body.headline,
      link: req.body.link
    };
    db.Article
      .create(article)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};