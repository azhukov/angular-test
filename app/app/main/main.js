'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('MainCtrl', ['$scope', 'MenuService', 'OrderModel', function ($scope, MenuService, OrderModel) {
    $scope.menu = {};
    MenuService.get() //'/data/menu.json')
        .then(function(data) {
      $scope.menu = data;

    });
    $scope.order = OrderModel;

    $scope.addToOrder = function addToOrder(meal) {
      $scope.order.add(meal);

      //alert(meal.name);
    }

  }
]);
