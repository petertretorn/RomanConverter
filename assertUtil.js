(function(module) {
    'use strict';

    module.constant('assertUtil', {
      assertEquals: function(actual, expected) {
        if (actual === expected) return true;
        else return false;
      }
    })
  })(angular.module('app'))