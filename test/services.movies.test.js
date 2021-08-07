const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  getAllStub,
  createStub,
  MongoLibMock,
} = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {
  const MovieService = proxyquire('../services/movies', {
    '../lib/mongo': MongoLibMock,
  });

  const movieService = new MovieService();

  describe('when getMovies method is called', async function () {
    it('should call the getAll MongoLib method', async function () {
      await movieService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return a collection of movies', async function () {
      const result = await movieService.getMovies({});
      assert.deepStrictEqual(result, moviesMock);
    });
  });

  describe('when createMovie method is called', async function () {
    it('should call the create MongoLib method', async function () {
      await movieService.createMovie({});
      assert.strictEqual(createStub.called, true);
    });

    it('should return the movie id', async function () {
      const result = await movieService.createMovie({});
      assert.deepStrictEqual(result, moviesMock[0].id);
    });
  });
});
