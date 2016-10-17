'use strict';

/**
 * @ngdoc function
 * @name frontpocketApp.controller:WeathersecureCtrl
 * @description
 * # WeathersecureCtrl
 * Controller of the frontpocketApp
 */
angular.module('frontpocketApp')
  .controller('WeathersecureCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getWeather = function () {
      var data = {cities:[]};
      var arregloCiudades = $scope.ciudades.split(", ");
      data.cities = arregloCiudades;
      var token = localStorage.getItem("token");
      var url = "https://om6ommz9lf.execute-api.us-east-1.amazonaws.com/dev/alonso-weather-secure";
      $http({
        method: 'PUT',
        url: url,
        data: data,
        headers: {'Authorization': token}
      })
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (error) {
          alert("You are not Worth it bitch!!");
          $scope.result = error;
        });
    };

    $scope.getAverage = function () {
      var token = localStorage.getItem("token");
      var url = "https://om6ommz9lf.execute-api.us-east-1.amazonaws.com/dev/dynamoScan";
      $http({
        method: 'GET',
        url: url,
        headers: {'Authorization': token}
      })
        .success(function (data) {
          alert("You are Worth it!!");
          $scope.result = data;
        })
        .error(function (error) {
          alert("You are NOT Worth it!!");
          $scope.result = error;
        });
    };

    $scope.login = function(valid){

      var url = "https://om6ommz9lf.execute-api.us-east-1.amazonaws.com/dev/alonsoLogin";
      var credentials={
        "username":"foo",
        "password":"tucita"
      };
      credentials.username = valid ? "pepeeltoro": "foo";

      $http.post(url,credentials)
        .success(function (data) {
          localStorage.setItem("token",data.token);
        })
        .error(function (error) {
          alert(error);
        });
    }
  });
