var Movie = require('./movieModel.js')


module.exports = {
  getAll: function(req, res) {
    Movie.find().exec(function(err, movies){
      res.send(movies);
    })
  },
  addMovie: function(req, res) {
    // req.body //{moviename: 'name'}
    Movie.create(req.body)
    .then(function(movie){
      console.log(movie);
      res.send(movie);
    });

  }
}