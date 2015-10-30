'use strict';

angular.module('test-app.common.models.meal-model', []).

  factory('MealModel', function () {
    function MealModel(data) {
      this.id = data.id;
      this.name = data.name;
      this.price = parseFloat(data.price);
      this.description = data.description;
      this.url = data.primaryImageUrl;
      this.tags = data.tags;
      this.isMain = angular.isArray(this.tags) && (this.tags.indexOf("#course:main_courses") > -1);
    }

    //MealModel.prototype.isMain = function() {
    //  return angular.isArray(this.tags) && (this.tags.indexOf("#course:main_courses") > -1);
    //};

    return MealModel;

  });


