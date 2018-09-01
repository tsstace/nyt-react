const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  headline: { type: String, required: true, unique: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now }
},
{ _id: false }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;