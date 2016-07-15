var movieApp = angular.module('movieApp', ['ngRoute']);

movieApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    });
})

.factory('moviesAjax', function($http) {
  var postMovie = function(movieName) {
    return $http({
      method: 'POST',
      url: '/api/movies',
      headers: {
        'Content-Type': 'Application/json'
      },
      data: { movieName: movieName}
    });
  }

  var getMovies = function() {
    return $http({
      method: 'GET',
      url: '/api/movies'
    }).then(function(obj) {
      console.log(obj.data);
      return obj.data;
    });
  };

  return {
    postMovie: postMovie,
    getMovies: getMovies
  };
})

.controller('homeController', function($scope, moviesAjax) {
  $scope.movies = [{movieName: 'Pulp Fiction'}];
  
  $scope.getMovies = function() {
    moviesAjax.getMovies()
      .then(function(movies) {
        $scope.movies = movies;
      });
  }

  $scope.postMovie = function(movieName) {
    console.log(movieName);
    moviesAjax.postMovie(movieName)
      .then(function(res) {
        console.log(res);
        $scope.getMovies();
      });
  }

  $scope.getMovies();
});