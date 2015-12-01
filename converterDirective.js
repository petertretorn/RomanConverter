(function(module) {
  'use strict';

  module.directive('converterWidget', function() {

    var controller = function($scope) {
      $scope.result = '';
      $scope.doConversion = function() {
        $scope.result = $scope.convert( { number: $scope.numberToConvert });
      }
    };

    return {
      replace: true,
      restrict: 'EA',
      scope: {
        convert: '&'
      },
      controller: controller,
      templateUrl: 'converterTemplate.html'
    }
  })
})(angular.module('app'))