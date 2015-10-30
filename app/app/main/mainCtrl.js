'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', 'orderModel', function ($scope, MenuService, orderModel) {
    $scope.menu = {};
    MenuService.get() //'/data/menu.json')
        .then(function(data) {
      $scope.meals = data;

    });
    $scope.order = orderModel;

    $scope.addToOrder = function addToOrder(meal) {
      $scope.order.add(meal);

      //alert(meal.name);
    }

  }
]);
