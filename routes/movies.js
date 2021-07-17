const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  //Get all movies
  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);

      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  });

  //Get a movie by Id
  router.get('/:movieId', async (req, res, next) => {
    try {
      const movie = await Promise.resolve(moviesMock[0]);

      res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  });

  //Create a movie
  router.post('/', async (req, res, next) => {
    try {
      const createdMovie = await Promise.resolve(moviesMock[0].id);

      res.status(201).json(createdMovie);
    } catch (error) {
      next(error);
    }
  });

  //Update movie
  router.put('/:movieId', async (req, res, next) => {
    try {
      const updatedMovie = await Promise.resolve(moviesMock[0]);

      res.status(200).json(updatedMovie);
    } catch (error) {
      next(error);
    }
  });

  //Delete a movie
  router.delete('/:movieId', async (req, res, next) => {
    try {
      const deletedMovie = await Promise.resolve(moviesMock[0].id);

      res.status(200).json(deletedMovie);
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
