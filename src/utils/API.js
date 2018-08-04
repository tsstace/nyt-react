import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    console.log(articleData);
    return axios.post("/api/articles", articleData);
  },
  findArticles: function(topic, startYear, endYear) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6df0ea9ad7fa466fbc9c2b708200d5b6&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
  }
};