'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Menuservice
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.factory('MenuService', ['$http','MealModel', function ($http, MealModel) {
		var service = {
			get: get
		};

		return service;

		function get () {
      return $http.get('/data/menu.json').then(function (data) {
        var res = [], meals;
        meals = data.data.meals;
        if (angular.isArray(meals)) {
          for (var i = 0; i < meals.length; i++) {
            res.push(new MealModel(meals[i]))
          }
        }
        return res;
      });
    }
	}]);

