'use strict';

/**
 * @ngdoc function
 * @name frontpocketApp.controller:WeatherappCtrl
 * @description
 * # WeatherappCtrl
 * Controller of the frontpocketApp
 */
angular.module('frontpocketApp')
  .controller('WeatherappCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getWeather = function () {
      var data = {cities:[]};
      var arregloCiudades = $scope.ciudades.split(", ");
      data.cities = arregloCiudades;
      var url = "https://om6ommz9lf.execute-api.us-east-1.amazonaws.com/dev/alarrawpLambda";
      $http.put(url, data)
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (data) {
          alert(data);
    });
  }
  });
