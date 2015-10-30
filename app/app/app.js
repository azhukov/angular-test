'use strict';

/**
 * @ngdoc overview
 * @name jstestApp
 * @description
 * # jstestApp
 *
 * Main module of the application.
 */
angular
  .module('jstestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'test-app.common.models.meal-model',
    'test-app.common.models.order-model'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      /*.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })*/
      .otherwise({
        redirectTo: '/'
      });
  });
