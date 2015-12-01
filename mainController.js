(function(module) {

  'use strict';

  module.controller('MainController', MainController)

  MainController.$Inject = ['converter', 'assertions']

  function MainController(converter, assertions) {
    
    var vm = this;
    
    //function pointer to get passed to directive
    vm.convertToRoman = converter.convertToRoman;
  
    vm.runAssertions = function() {
      assertions.runTestSuite();
    };
  }

})(angular.module('app', []));