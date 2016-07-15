var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'moviesuggestion'
});

// connection.connect(function(err) {
//   if (err) {
//     console.log('error connecting' + err.stack);
//   } else {
//     console.log('connected to database...')
//   }
// });

module.exports = connection;

