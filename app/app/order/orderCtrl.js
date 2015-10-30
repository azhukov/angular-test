'use strict';

/**
 * @ngdoc function
 * @name jstestApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the jstestApp
 */
angular.module('jstestApp')
  .controller('OrderCtrl', ['$scope', 'orderModel', function ($scope, orderModel) {
    $scope.order = orderModel;

    $scope.addToOrder = function (meal) {
      $scope.order.add(meal);
    }

    $scope.removeFromOrder = function (meal) {
      $scope.order.add(meal);
    }

  }
  ]);

