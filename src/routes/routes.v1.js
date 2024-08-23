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

  let movie1 = new Movie("1", "Dune", "Spice", "SF")
  let movie2 = new Movie("2", "Aliens", "The best sequel ever", "SF")

  res.json([movie1, movie2]);
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
  res.json({"receivedMovieName": newMovie.getName()});
});

module.exports = routes;