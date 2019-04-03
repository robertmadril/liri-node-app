//app requirements
//dotenv requirement to hide API keys
require('dotenv').config();
//axios import
var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
 
var command = process.argv[2];

var userInput = process.argv.splice(3).join("+").toString();

console.log(userInput);

//functions that will handle API calls
function concertSearch(searchTerm) {

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {
            var objectReturned = response.data;
            for (i=0; i<objectReturned.length; i++) {
            console.log(objectReturned[i].venue.name);
            console.log(objectReturned[i].venue.city);
            console.log(objectReturned[i].datetime);
            console.log("__________________________");
            
            }
        }
    );
};

function spotifySearch(searchTerm) {

    spotify
        .search({ type: 'track', query: searchTerm })
        .then(function (response) {

            
            console.log(response.tracks.items[0].artists[0].name);
            console.log(response.tracks.items[0].name);
            console.log(response.tracks.items[0].album.external_urls.spotify);
            console.log(response.tracks.items[0].album.name);

            
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
            console.log("Movie: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );

};

function staticSearch() {

};

//control flow to determine what function is called.
switch (command) {
    case "concert-this":
        concertSearch(userInput);
        break;

    case "spotify-this-song":
        if (!userInput) {
        userInput = "Ace+of+Base"
        spotifySearch(userInput); }
        else {
            spotifySearch(userInput);
        }
        break;

    case "movie-this":
    if (!userInput) {
        userInput = "Mr+Nobody"
        movieSearch(userInput); }
        else {
            movieSearch(userInput);
        }
        break;

    case "do-what-it-says":
        staticSearch();
        break;

    default:
        console.log("Please enter a valid search term.");
};

/* To-Do

Clean concert call
Create FS call to import data
Create staticSearch from FS call (assign command and userInput)

*/