movies = [
  {movieName: 'Godfather'},
  {movieName: 'Pokemon'},
  {movieName: 'BOOMBOOM'},
  {movieName: 'SHAKALAKA'},
  {movieName: 'WOOPWOOP'}
];

var movieModel = require('./movieModel.js')

module.exports = {
  getAll: function(req, res) {
    movieModel.getAll(function(movieArray) {
      res.send(movieArray);
    });
  },
  addMovie: function(req, res) {
    movieModel.addMovie(req.body, function(rows) {
      res.send(rows);
    });
  }
}