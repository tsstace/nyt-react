const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

var databaseUrl = 'mongodb://localhost/savedarticles';

mongoose.connect('mongodb://localhost/savedarticles',
//mongoose.connect(
//  process.env.MONGODB_URI || "mongodb://localhost/savedarticles",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Connected to Mongoose')
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});