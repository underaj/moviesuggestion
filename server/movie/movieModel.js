var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  moviename: { type : String , unique : true, required : true }
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;