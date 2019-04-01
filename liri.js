require("./.env").config();

var keys = require("./keys.js");

var command = process.argv[2];

var userInput = "";

function concertSearch(searchTerm) {

};

function spotifySearch(searchTerm) {

};

function movieSearch(searchTerm) {

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
