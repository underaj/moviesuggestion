var connection = require('../db');

module.exports = {
  getAll: function(cb) {
    connection.query('SELECT * FROM movies', function(err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        cb(rows);
      }
    });
  },
  addMovie: function(movieObj, cb) {
    connection.query('INSERT INTO movies SET ?', movieObj, function(err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        cb(rows);
      }
    });
  }
};