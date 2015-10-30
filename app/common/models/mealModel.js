'use strict';

angular.module('test-app.common.models.meal-model', []).

  factory('MealModel', function () {
    function mealModel(data) {
      this.id = data.id;
      this.name = data.name;
      this.price = parseFloat(data.price);
      this.description = data.description;
      this.url = data.primaryImageUrl;
      var tags = data.tags;

      this.isMain = function() {
        return angular.isArray(tags) && (tags.indexOf("#course:main_courses") > -1);
      };
    }

    return mealModel;

  });


