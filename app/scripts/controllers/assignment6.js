'use strict';

/**
 * @ngdoc function
 * @name frontpocketApp.controller:Assignment6Ctrl
 * @description
 * # Assignment6Ctrl
 * Controller of the frontpocketApp
 */
angular.module('frontpocketApp')
  .controller('Assignment6Ctrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.slackMsg = "Hola Mundo";

    $scope.sendMsg = function () {

      $scope.data = (JSON.stringify({
        "Records": [
          {
            "Sns": {
              "Message": $scope.slackMsg
            }
          }
        ]
      }));
      var url = "Aqui va el URL del webhook de slack!";
      $http.post(url, $scope.data)
        .success(function (data) {
          console.log(data);
        })
        .error(function (error) {
          alert("The slack webhook URL has been disable");
          console.log(error);
        });
    }


  });
