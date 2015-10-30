'use strict';

/**
 * @ngdoc service
 * @name jstestApp.Menuservice
 * @description
 * # MenuService
 * Service in the jstestApp.
 */
angular.module('jstestApp')
	.factory('MenuService', ['$http','$q','MealModel', function ($http, $q, MealModel) {
		var service = {
			get: get
		};

		return service;

		function get () {
        var deferred = $q.defer();

        $http.get('/data/menu.json').success(function(data) {

          // draft
          if(angular.isArray(data.meals)) {
            var res = [],
                meals = data.meals;

            for(var i=0; i< meals.length; i++) {
              res.push(new MealModel(meals[i]))
            }

            data.meals = res;

            deferred.resolve(data);
          } else {
            deferred.reject('wrong format'); //TODO: proper logging of errors
          }


        }).error(function() {
          deferred.reject('some error'); //TODO: proper logging of errors
        });

        return deferred.promise;
      };
	}]);

