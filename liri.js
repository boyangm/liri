const dotenv = require("dotenv").config();
const keys = require("./keys.js");

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

const command = process.argv[2];
switch(command){
    case 'spotify-this-song':
        
} 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });