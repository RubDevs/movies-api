const express = require('express');
const MovieService = require('../services/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const movieService = new MovieService();
  //Get all movies
  router.get('/', async (req, res, next) => {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;
    try {
      const movies = await movieService.getMovies({ tags });
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  });

  //Get a movie by Id
  router.get(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movie = await movieService.getMovie({ movieId });
        res.status(200).json(movie);
      } catch (error) {
        next(error);
      }
    }
  );

  //Create a movie
  router.post(
    '/',
    validationHandler(createMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      try {
        const createdMovie = await movieService.createMovie({ movie });

        res.status(201).json(createdMovie);
      } catch (error) {
        next(error);
      }
    }
  );

  //Update movie
  router.put(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async (req, res, next) => {
      const { body: movie } = req;
      const { movieId } = req.params;
      try {
        const updatedMovie = await movieService.updateMovie({ movieId, movie });

        res.status(200).json(updatedMovie);
      } catch (error) {
        next(error);
      }
    }
  );

  //Delete a movie
  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const deletedMovie = await movieService.deleteMovie({ movieId });

        res.status(200).json(deletedMovie);
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
