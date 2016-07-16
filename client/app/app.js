var movieApp = angular.module('movieApp', ['ngRoute']);

movieApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    });
})

.factory('moviesAjax', function($http) {
  var postMovie = function(moviename) {
    return $http({
      method: 'POST',
      url: '/api/movies',
      headers: {
        'Content-Type': 'Application/json'
      },
      data: { moviename: moviename}
    });
  }

  var getMovies = function() {
    return $http({
      method: 'GET',
      url: '/api/movies'
    }).then(function(obj) {
      return obj.data;
    });
  };

  return {
    postMovie: postMovie,
    getMovies: getMovies
  };
})

.controller('homeController', function($scope, moviesAjax) {
  $scope.movies = [['Pulp Fiction']];
  
  $scope.getMovies = function() {
    moviesAjax.getMovies()
      .then(function(movies) {
        $scope.movies = movies;
      });
  }

  $scope.postMovie = function(moviename) {
    moviesAjax.postMovie(moviename)
      .then(function(res) {
        $scope.getMovies();
      });
  }

  $scope.getMovies();
});