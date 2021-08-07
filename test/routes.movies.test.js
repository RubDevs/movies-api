const assert = require('assert');
const { describe, it } = require('mocha');
const proxyquire = require('proxyquire');

const { moviesMock, MovieServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MovieServiceMock,
  });

  const request = testServer(route);
  describe('GET /movies', function () {
    it('should return a status code 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with a collection of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepStrictEqual(res.body, moviesMock);
        done();
      });
    });
  });
});
