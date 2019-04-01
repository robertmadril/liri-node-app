//app requirements
require('dotenv').config();

var axios = require("axios");

var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var command = process.argv[2];

var userInput = "";

//functions that will handle API calls
function concertSearch(searchTerm) {

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "rest.bandsintown.com/artists/" + searchTerm + "/events/";

    axios.get(queryUrl).then(
        function (response) {
            console.log(response);
        }
    );
};

function spotifySearch(searchTerm) {
    spotify
        .search({ type: 'track', query: searchTerm })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log(err);
        });
};

function movieSearch(searchTerm) {

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
        }
    );

};

function staticSearch(searchTerm) {

};

//control flow to determine what function is called.
switch (command) {
    case "concert-this":
        concertSearch(userInput);
        break;

    case "spotify-this-song":
        spotifySearch(userInput);
        break;

    case "movie-this":
        movieSearch(userInput);
        break;

    case "do-what-it-says":
        staticSearch(searchTerm);
        break;

    default:
        console.log("Please enter a valid search term.");
}
