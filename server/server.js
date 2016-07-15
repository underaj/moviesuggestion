var express = require('express');
var config = require('./config/config');
var apiRoutes = require('./config/routes')();
var app = express();

config(app, express);
app.use('/api', apiRoutes);

app.listen(3000, function() {
  console.log('Listening to localhost:3000...');
});
