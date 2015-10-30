'use strict';

angular.module('test-app.common.directives.order-directive', [
  'test-app.common.models.order-model'
]).

  directive('myOrder', function (orderModel) {

    return {
      scope: {},
      templateUrl: 'common/directives/order/order.tpl.html',
      link: function ($scope) {
        $scope.order = orderModel;
        $scope.isCollapsed = true;
        $scope.switchStatus = function () {
          $scope.isCollapsed = !$scope.isCollapsed;
        }
      }
    }

  });
