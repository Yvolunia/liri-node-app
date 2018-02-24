
require('dotenv').config() 

var validation = require("./key.js");

var request = require("request");

var Spotify = require('node-spotify-api');

function spotifySong() {
  spotify.search({ type: track, query: value, limit: 1 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log(“Error occurred: ” + err);
    }
    console.log(JSON.stringify(“Artist Name: ” + data.tracks.items[0].album.artists[0].name, null, 2));
    console.log(JSON.stringify(“Song: ” + data.tracks.items[0].name, null, 2));
    console.log(JSON.stringify(“Album: ” + data.tracks.items[0].album.name, null, 2)
    );console.log(JSON.stringify(“Preview Link: ” + data.tracks.items[0].preview_url,null, 2)
    );
  });
}

value = process.argv[3] (the song name entered into node);