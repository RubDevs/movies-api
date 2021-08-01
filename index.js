const express = require('express');
const config = require('./config');
const moviesApi = require('./routes/movies');
const {
  logError,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

//body parser
app.use(express.json());
//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler);

//Error handler
app.use(logError);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
