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
    //'ui.router',
    'LocalStorageModule',
    'test-app.common.directives.order-directive',
    'test-app.common.models.meal-model',
    'test-app.common.models.order-model'
  ])
  .config(function ($routeProvider,localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('test-app');

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/order', {
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
