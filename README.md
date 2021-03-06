# LIRI Search App

## About LIRI
LIRI stands for Language Interpretation and Recognition Inteface (basically, it's the text version of Apple's SIRI).

This app is built in Node.js and uses a command line interface to find specific information for you. 

## How to use the app

* First, clone the github repository to your client and be sure that node.js is installed prior to running the program.

* Download the dependencies by running npm install in the terminal (be sure that you run this while in the recently cloned folder on your disk). 

* Next, be sure you have a spotify key listed in a file titled ".env" in the same folder as your liri.js file in the format below:
```
SPOTIFY_ID=YOUR SPOTIFY ID
SPOTIFY_SECRET=YOUR SPOTIFY SECRET
```

* Once these steps are complete, you're ready to begin searching!


* In order to search, you can choose from the list of commands + a search term following your file call. An example of this would look like:
```
node liri.js movie-this Blade Runner
```
* The list of command searches are:

    1. For movie searches, type "movie-this"
    1. For song searches, type "spotify-this-song"
    1. For concert searches, type "concert-this"
    1. Otherwise, for a default search, type "do-what-it-says", not inserting a search term following the command

Here's a link to a video demo, to see it in action:
[YouTube-LIRI](https://youtu.be/LdI-ygRvIFs)
Hope you find what you're looking for!