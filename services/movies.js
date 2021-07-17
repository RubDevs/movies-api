const { moviesMock } = require('../utils/mocks/movies');

class MovieService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movie = await Promise.resolve(moviesMock[0]);
    return movie || {};
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId || {};
  }

  async createMovie() {
    const createdMovieId = await Promise.resolve(moviesMock[0].id);
    return createdMovieId || {};
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId || {};
  }
}

module.exports = MovieService;
