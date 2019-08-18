const dotenv = require("dotenv").config();
const keys = require("./keys.js");
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

let command = process.argv[2];
let input = process.argv.splice(3).join(' ');
console.log(command);
console.log(input);

function liri(command,input=process.argv.splice(3).join(' ')){
switch(command){
    case 'spotify-this-song':
      let track = input || "Ace of Base"
            spotify.search({ type: 'track', query: `${track}`, limit: 5 }, function(err, data) {
                if (err) {
                return console.log('Error occurred: ' + err);
                }
            const response =data.tracks.items.map(arr =>{
                    console.log(`   Song title ${arr.name}
            Album Name:${arr.album.name}
            Artist name: ${arr.artists.map(artist =>artist.name)}
            Hear the song: ${arr.href}
        
            `);
        })
    
    });
      break;
    case 'concert-this':
    axios.get('https://rest.bandsintown.com/artists/' + input + '/events?app_id=codingbootcamp')
    .then( response => {
      // handle success
        const concert = response.data.map(arr =>{
            const time =arr.datetime;
            console.log(`Artist Name: ${input}
            Venue Name: ${arr.venue.name}
            City: ${arr.venue.city}
            Time :${moment(time).format('llll')}`);
            
        })
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
    break;
    case 'movie-this':
      axios.get(`http://www.omdbapi.com/?t="${input}&y=&plot=short&apikey=trilogy`)
      .then(response => {
          const movie = response.data;

        console.log(`title: ${movie.Title}
  Released: ${movie.Released}
  Rating:${movie.imdbRating}
  Rotten Tomatoes: ${movie.Ratings[2].Value}
  Country : ${movie.Country}
  Launguage: ${movie.Language}
  Plot: ${movie.Plot}
  Actors: ${movie.Actors}
        `)
      
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      break;
  case 'do-this':
      fs.readFile('./random.txt', 'utf8', (err, data) => {
        if (err) throw err;
        arr= data.split(',');
        command = arr[0];
        input = arr[1].replace('"',"");
        liri(command,input);
        
        // console.log(command, input);
    });
break;

      

} 
}
liri(command,input);