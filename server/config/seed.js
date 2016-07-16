var Movie = require('../movie/movieModel');

console.log('calling seeds');

Movie.find().exec(function(err, movies) {
  if (err) {
    console.log(err)
  } else if (movies.length === 0) {
    Movie.create({moviename: 'Pulp Fiction'});
    Movie.create({moviename: 'God Father'});
    Movie.create({moviename: 'Finding Nemo'});
  }
});