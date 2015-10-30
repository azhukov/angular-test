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

    this.add = function(meal) {
      var group, groupHash;
      if(meal.isMain()) {
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
      if(meal.isMain()) {
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

    var that = this;

    function load() {
      var val = localStorageService.get('myOrder')

      if(val) {
        that.main = val.main;
        that.mainHash = val.mainHash;
        that.other = val.other;
        that.otherHash = val.otherHash;
        total = val.total;
      }
    }

    function save() {
      var val = {
        main: that.main,
        mainHash: that.mainHash,
        other: that.other,
        otherHash: that.otherHash,
        total: total
      };
      localStorageService.set('myOrder', val)
    }

    load();

  }]);

