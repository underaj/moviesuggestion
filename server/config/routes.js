var express = require('express');
var userCtrl = require('../user/userCtrl');
var router = express.Router();

module.exports = function Router() {

  // User routes
  router.post('/user/signin', userCtrl.signin);
  router.post('/user/signup', userCtrl.signup);  

  return router;
}



