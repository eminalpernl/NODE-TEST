import express from 'express';
import { listMovies, searchMovie, addMovie, deleteMovie } from '../controllers/movies.js';
const router =  express.Router();



//list all movies
router.get('/movie',listMovies)

//search for a movie in the list
router.get('/movie/:id', searchMovie);

//add movie to the list
router.post('/movie',addMovie);

//remove movie from the list
router.delete('/movie/:id',deleteMovie);


export default router;
