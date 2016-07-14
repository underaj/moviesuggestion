var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRoutes = require('./config/routes');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use('/api', apiRoutes());

app.listen(3000, function() {
  console.log('Listening to localhost:3000...');
});
