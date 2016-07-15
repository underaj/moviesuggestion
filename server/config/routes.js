var express = require('express');
var userCtrl = require('../user/userCtrl');
var movieCtrl = require('../movie/movieCtrl');
var router = express.Router();

module.exports = function Router() {

  // User routes
  router.post('/user/signin', userCtrl.signin);
  router.post('/user/signup', userCtrl.signup);  

  // Movie routes
  router.get('/movies', movieCtrl.getAll);
  router.post('/movies', movieCtrl.addMovie);

  return router;
}



