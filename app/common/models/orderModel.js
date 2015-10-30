'use strict';

angular.module('test-app.common.models.order-model', []).

  service('OrderModel', function () {
    var total = 0;

    this.main = [];
    this.other = [];
    this.mainHash = {};
    this.otherHas = {};

    this.getTotal = function() {
      return (total/100).toFixed(2);
    };

    this.add = function(meal) {
      var group, groupHash;
      if(meal.isMain()) {
        group = this.main;
        groupHash = this.mainHash;
      } else {
        group = this.main;
        groupHash = this.mainHash;
      }

      if(!groupHash[meal.id]) {
        groupHash[meal.id] = 1;
        group.push(meal);
      } else {
        groupHash[meal.id] = groupHash[meal.id] + 1;
      }

      total += this.Math.round(meal.price * 100);

      save();
    };

    this.remove = function(meal) {
      var group, groupHash;
      if(meal.isMain()) {
        group = this.main;
        groupHash = this.mainHash;
      } else {
        group = this.main;
        groupHash = this.mainHash;
      }

      var cnt = groupHash[meal.id];
      if(cnt) {
        cnt--;
        groupHash[meal.id] = cnt;
        total -= this.Math.round(meal.price * 100);

        if(cnt == 0) {
          groupHash[meal.id] = null;
          for(var i =0; i < group.length; i++) {
            if(group[i].id == meal.id) {
              group.slice(i,1);
              save();
              return;
            }
          }
        }
      }

      save();
    };

    function load() {

    }

    function save() {

    }

    load();

  });

