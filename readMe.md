# Liri



Liri is a command line application to get information on your favorite Band, Songs and Movies!

  - type one of the following commands : spotify- this -song, concert-this, movie-this , do this
  - results from the internet will populate the terminal
  - including links to the songs you want to hear

#Usage

  - simply tpe the command after  node js  and watch the results pop up
 
```sh
$ node liri.js spotify-this-song calligraphy
```




You will see:
> Artist name:
> Album name:
> Song title:
> Link to the song

![alt text](https://github.com/boyangm/liri/blob/master/Screen%20Shot%202019-08-19%20at%205.32.05%20PM.png?raw=true)
### Tech

Liri uses a number of open source projects to work properly:

* [Node-Spotify-Api] - API used to query Tracks
* [OMDB-API] - API used to query Movies
* [BansinTown-API] - API used to query Concerts

* [node.js] - evented I/O for the backend
* [dotenv] - node package to read .env files
* [axios] - node pakage promise based HTTP client for the browser and node.js 
* [moment]- node package to display time into a common format.


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Liri requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd liri
$ npm install -d
$ node app
```


