var express = require('express');
var config = require('./config/config');
var apiRoutes = require('./config/routes')();
var app = express();

require('./db/index.js');
require('./config/seed.js');

config(app, express);
app.use('/api', apiRoutes);

app.listen(3000, function() {
  console.log('Listening to localhost:3000...');
});
