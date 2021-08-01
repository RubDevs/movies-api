const express = require('express');
const config = require('./config');
const moviesApi = require('./routes/movies');
const { logError, errorHandler } = require('./utils/middleware/errorHandler');
const app = express();

//body parser
app.use(express.json());
//routes
moviesApi(app);

//Error handler
app.use(logError);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
