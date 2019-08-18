const dotenv = require("dotenv").config();
const keys = require("./keys.js");
const axios = require('axios');

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

const command = process.argv[2];
const input = process.argv.splice(3).join('_');

console.log(input);
switch(command){
    case 'spotify-this-song':
        spotify.search({ type: 'track', query: `${input}`, limit: 5 }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        const response =data.tracks.items.map(arr =>{
            console.log(`Song title ${arr.name}`);
            console.log(` Album Name:${arr.album.name}`);
            console.log(` Artist name: ${arr.artists[0].name}`);
            console.log(`Hear the song: ${arr.href}`);
        })
    
        });
      break;
    case 'concert-this':
    axios.get('https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp')
    .then(function (response) {
      // handle success
      const concert = response.data.map(arr =>{
          console.log(arr.venue.name);
          console.log(arr.venue.city);
          console.log(arr.datetime);
          
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    break;
      

} 