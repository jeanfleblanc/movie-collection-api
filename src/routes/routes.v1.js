const express = require('express');
const { Movie, Metadata } = require('../models/movie.js');
const app = express();

app.use(express.json()); // for parsing application/json

const routes = express.Router();

/**
 * @openapi
 * /app/v1/movies:
 *   get:
 *     description: Get the list of movies
 *     tags:
 *       -  v1
 */
routes.get("/movies", (req, res, next) => {
  //  trier par genre, date, cote
  res.json({"movie": "Dune"});
});
  
/**
 * @openapi
 * /app/v1/movies:
 *   post:
 *     description: Add a movie to the database
 *     tags:
 *       -  v1
 */
routes.post("/movies", (req, res, next) => {
  const newMovie = new Movie(req.body.message);
  res.json({"receivedMovie": newMovie.getContent()});
});

module.exports = routes;