const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
let movies = require('../../movie')

router.get('/', (req, res) => {
    res.json(movies);
})

router.post('/', (req, res) => {
    console.log("req ", req.body, uuidv4());
    const newData = {...req.body, id: uuidv4()}
    movies.push(newData);
    res.json(newData);
})

router.put('/:id', (req, res) => {
    console.log("req ", req.body);
    const found = movies.find(movie=> movie.id === parseInt(req.params.id));
    if (!found){
        res.status(404).json("Not found");
    }
    let movieUpdated = null;
    movies = movies.map(movie => {
        if (movie.id === parseInt(req.params.id)){
            movie = {...movie, ...req.body};
            movieUpdated = movie;
        }
        return movie;
    });
    res.json(movieUpdated);

})

router.get('/:id', (req, res) => {
    console.log("req ", req.params.id);
    const indexMovie = movies.findIndex(movie=>movie.id === parseInt(req.params.id));
    console.log(" indexMovie ", indexMovie);
    if (indexMovie > -1 ){
        res.json(movies[indexMovie]);
    }
    res.status(404).json("Not found");
})


module.exports = router;
