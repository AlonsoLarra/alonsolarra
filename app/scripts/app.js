'use strict';

/**
 * @ngdoc overview
 * @name frontpocketApp
 * @description
 * # frontpocketApp
 *
 * Main module of the application.
 */
angular
  .module('frontpocketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
      .when('/casosContaminacion', {
        templateUrl: 'views/casoscontaminacion.html',
        controller: 'CasoscontaminacionCtrl',
        controllerAs: 'casosContaminacion'
      })
      .when('/casosContaminacion', {
        templateUrl: 'views/casoscontaminacion.html',
        controller: 'CasoscontaminacionCtrl',
        controllerAs: 'casosContaminacion'
      })
      .when('/CaracteristicasGeograficas', {
        templateUrl: 'views/caracteristicasgeograficas.html',
        controller: 'CaracteristicasgeograficasCtrl',
        controllerAs: 'CaracteristicasGeograficas'
      })
      .when('/ongs', {
        templateUrl: 'views/ongs.html',
        controller: 'OngsCtrl',
        controllerAs: 'ongs'
      })
      .when('/fechasrelativas', {
        templateUrl: 'views/fechasrelativas.html',
        controller: 'FechasrelativasCtrl',
        controllerAs: 'fechasrelativas'
      })
      .when('/huellahidrica', {
        templateUrl: 'views/huellahidrica.html',
        controller: 'HuellahidricaCtrl',
        controllerAs: 'huellahidrica'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
