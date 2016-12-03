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
      .when('/usorecursos', {
        templateUrl: 'views/usorecursos.html',
        controller: 'UsorecursosCtrl',
        controllerAs: 'usorecursos'
      })
      .when('/esteropuntabanda', {
        templateUrl: 'views/esteropuntabanda.html',
        controller: 'EsteropuntabandaCtrl',
        controllerAs: 'esteropuntabanda'
      })
      .when('/accionesconcretas', {
        templateUrl: 'views/accionesconcretas.html',
        controller: 'AccionesconcretasCtrl',
        controllerAs: 'accionesconcretas'
      })
      .when('/cambioclimatico', {
        templateUrl: 'views/cambioclimatico.html',
        controller: 'CambioclimaticoCtrl',
        controllerAs: 'cambioclimatico'
      })
      .when('/agenda21', {
        templateUrl: 'views/agenda21.html',
        controller: 'Agenda21Ctrl',
        controllerAs: 'agenda21'
      })
      .when('/efectoInvernadero', {
        templateUrl: 'views/efectoinvernadero.html',
        controller: 'EfectoinvernaderoCtrl',
        controllerAs: 'efectoInvernadero'
      })
      .when('/legislacion', {
        templateUrl: 'views/legislacion.html',
        controller: 'LegislacionCtrl',
        controllerAs: 'legislacion'
      })
      .when('/legam', {
        templateUrl: 'views/legam.html',
        controller: 'LegamCtrl',
        controllerAs: 'legam'
      })
      .when('/etica', {
        templateUrl: 'views/etica.html',
        controller: 'EticaCtrl',
        controllerAs: 'etica'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
