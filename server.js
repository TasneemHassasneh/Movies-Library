'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./Movie-Data/data.json');
const axios = require('axios');


require('dotenv').config();

app.use(cors());



// Home Page Endpoint
app.get('/', (req, res) => {
    // Constructor function to ensure data follows the same format
    function Movie(title, poster_path, overview) {
        this.title = title;
        this.poster_path = poster_path;
        this.overview = overview;
    }
    // Sample movie data
    const movie = new Movie(data.title,data.poster_path,data.overview);
    // Send the movie data as the response
    res.send(movie);
  });

// Favorite Page Endpoint: /favorite
app.get('/favorite', (req, res) => {res.send("Welcome to Favorite Page");});

// Trending Endpoint
app.get('/trending', async (req, res) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`);
  
      // Extract relevant data from the API response
      const movies = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
      }));
  
      res.send(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send({status: 500,responseText: 'Sorry, something went wrong',});
    }
  });
  
  // Search Endpoint
  app.get('/search', async (req, res) => {
    const { query } = req.query;
  
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`
      );
  
      // Extract relevant data from the API response
      const movies = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        poster_path: movie.poster_path,
        overview: movie.overview,
      }));
  
      res.send(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        status: 500,
        responseText: 'Sorry, something went wrong',
      });
    }
  });

  app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
      );
  
      // Extract relevant data from the API response
      const movie = {
        id: response.data.id,
        title: response.data.title,
        release_date: response.data.release_date,
        poster_path: response.data.poster_path,
        overview: response.data.overview,
        runtime: response.data.runtime,
        genres: response.data.genres.map((genre) => genre.name),
        production_companies: response.data.production_companies.map(
          (company) => company.name
        ),
      };
  
      res.send(movie);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        status: 500,
        responseText: 'Sorry, something went wrong',
      });
    }
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
