const dotenv = require("dotenv").config();
const keys = require("./keys.js");
const axios = require('axios');
var moment = require('moment');


const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

const command = process.argv[2];
const input = process.argv.splice(3).join(' ');

console.log(input);
switch(command){
    case 'spotify-this-song':
        spotify.search({ type: 'track', query: `${input}`, limit: 5 }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        const response =data.tracks.items.map(arr =>{
            console.log(`   Song title ${arr.name}
    Album Name:${arr.album.name}
    Artist name: ${arr.artists[0].name}
    Hear the song: ${arr.href}
    
    `);
        })
    
        });
      break;
    case 'concert-this':
    axios.get('https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp')
    .then(function (response) {
      // handle success
      const concert = response.data.map(arr =>{
          const time =arr.datetime;
          console.log(`Artist Name: ${input}
         Venue Name: ${arr.venue.name}
          City: ${arr.venue.city}
          Time :${moment(time).format('llll')}`);
          
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    break;
    case 'movie-this':
    axios.get(`http://www.omdbapi.com/?t="${input}&y=&plot=short&apikey=trilogy`)
    .then(function (response) {
        const movie = response.data;

      console.log(`title: ${movie.title}
Released: ${movie.Released}
Rating:${movie.imdbRating}
Rotten Tomatoes: ${movie.Ratings[2].value}
Country : ${movie.Country}
Launguage: ${movie.Language}
Plot: ${movie.Plot}
Actors: ${movie.Actors}
      `)
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    break;
      

} 