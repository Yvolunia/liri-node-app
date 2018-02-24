// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");


// Then run a request to the OMDB API with the movie specified

var omdb = require('omdb');
 
omdb.search('Frozen', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });




