import { v4 as uuidv4 } from 'uuid';


let movies = [
    {
        id: "1",
        tittle:  "inception",
        director: "Christopher Nolan",
        release_date: "2010-07-16"
    },
    {
        id: "2",
        tittle:  "The Irishman",
        director: "Martin Scorsese",
        release_date: "2019-09-27"
    }
];

export const listMovies = (req, res)=>{
    res.status(200).json(movies);
};

export const searchMovie = (req, res)=>{
    const id = req.params.id;

    for (const movie of movies) {
        if (movie.id === id ) {
            res.status(200).json(movie)
            return
        }
    }

    res.status(404).send('Movie not found')
};

export const addMovie = (req, res)=>{
    const movie = req.body;
    const randomId = uuidv4();
    const newMovie = { id:randomId, ...movie }
    const checkTruth = [];
    
    const checker = arr => arr.every(v => v === true);

    // checking if all inputs are valid
    for (const property in movie) {
        checkTruth.push(movies[0].hasOwnProperty(property));
    }

    if (!checker(checkTruth)) {
        return res.status(400).json({ msg: 'Please valid data' });
    }


    // checking if all required inputs are exist.
    if (!newMovie.tittle || !newMovie.director || !newMovie.release_date) {
        return res.status(400).json({ msg: 'Please include a tittle, director and release date' });
    }


    // appending new data to the list
    movies.push(newMovie);
    res.status(200).send(`Movie with the tittle of "  ${req.body.tittle}  " and with the id: ${randomId} is added to the list`)

};

export const deleteMovie = (req, res)=>{
    const id = req.params.id;

    const found = movies.some(movie=>movie.id === id);
if (found) {
    movies =  movies.filter(movie => movie.id !== id)
    res.json({ msg: `Movie with the id ${id} is deleted`})
} else {
    res.status(400).json({ msg: `No movie with this ID of ${id}` })
}};


export const updateMovie = (req, res) => {
    const id = req.params.id;
    const { tittle, director, release_date } = req.body;

    const movie = movies.find((movie) => movie.id == id);
    

    if (tittle) movie.tittle = tittle;
    if (director) movie.director = director;
    if (release_date) movie.release_date = release_date;



    res.send(`movie with the ${id} updated`)

}