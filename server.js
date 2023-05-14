'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./Movie-Data/data.json');

app.use(cors());

// Constructor function to ensure data follows the same format
function Movie(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;
    Movie.allMovie.push(this);
  }
  Movie.allMovie=[];

// Home Page Endpoint
app.get('/', (req, res) => {
    // Sample movie data
    const movie = new Movie(
      req.body.title,req.body.poster_path,req.body.overview
    );
    // Send the movie data as the response
    res.send(movie);
  });

// Favorite Page Endpoint: /favorite
app.get('/favorite', (req, res) => {
  res.send("Welcome to Favorite Page");
});

// Error handling for server error (status 500)
app.use((err, req, res, next) => {
  res.status(500).json({
    status: 500,
    responseText: "Sorry, something went wrong"
  });
});

// Error handling for "page not found error" (status 404)
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    responseText: "Page not found"
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
