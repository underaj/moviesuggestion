movies = [
  {movieName: 'Godfather'},
  {movieName: 'Pokemon'},
  {movieName: 'BOOMBOOM'},
  {movieName: 'SHAKALAKA'},
  {movieName: 'WOOPWOOP'}
];


module.exports = {
  getAll: function(req, res) {
    res.send(movies);
  },
  addMovie: function(req, res) {
    movies.push(req.body);
    res.send('sucess');
  }
}