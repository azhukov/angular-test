'use strict';

angular.module('test-app.common.models.order-model', []).

  service('orderModel',['localStorageService',  function (localStorageService) {
    var total = 0;

    this.main = [];
    this.other = [];
    this.mainHash = {};
    this.otherHash = {};

    this.getTotal = function() {
      return (total/100).toFixed(2);
    };

    this.isEmpty = function() {
      return total < 1;
    };

    this.add = function(meal) {
      var group, groupHash;
      if(meal.isMain) {
        group = this.main;
        groupHash = this.mainHash;
      } else {
        group = this.other;
        groupHash = this.otherHash;
      }

      if(!groupHash[meal.id]) {
        groupHash[meal.id] = 1;
        group.push(meal);
      } else {
        groupHash[meal.id] = groupHash[meal.id] + 1;
      }

      total += Math.round(meal.price * 100);

      save();
    };

    this.remove = function(meal) {
      var group, groupHash;
      if(meal.isMain) {
        group = this.main;
        groupHash = this.mainHash;
      } else {
        group = this.other;
        groupHash = this.otherHash;
      }

      var cnt = groupHash[meal.id];
      if(cnt) {
        cnt--;
        groupHash[meal.id] = cnt;
        total -= Math.round(meal.price * 100);

        if(cnt < 1) {
          groupHash[meal.id] = null;
          for(var i =0; i < group.length; i++) {
            if(group[i].id == meal.id) {
              group.splice(i,1);
              save();
              return;
            }
          }
        }
      }

      save();
    };

    var that = this;

    function load() {
      var val = localStorageService.get('mealOrder');

      /*if(val) {
        that.main = val.main;
        that.mainHash = val.mainHash;
        that.other = val.other;
        that.otherHash = val.otherHash;
        total = val.total;
      }*/
    }

    function save() {
      //val =  null;
      localStorageService.set('mealOrder', angular.extend({total: total}, that))
    }

    load();

  }]);

