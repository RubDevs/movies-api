const express = require('express');
const config = require('./config');
const moviesApi = require('./routes/movies');
const app = express();

//body parser
app.use(express.json());
//routes
moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
