(function(module) {
  'use strict';

  module.factory('rulesEngine', rulesEngine);

  function rulesEngine() {

    var parsingRules = [],
      abstractRule = {
        doesRuleApplies: function(number) {
          return (number >= this.greaterThanEquals && number < this.lessThan);
        }
      },

      //format: <greaterThanEquals>, <lessThan>, <symbol>, <substract>
      rulesData = [
        [9, 10, 'IX', 9],
        [10, 40, 'X', 10],
        [40, 50, 'XL', 40],
        [50, 90, 'L', 50],
        [90, 100, 'XC', 90],
        [100, 400, 'C', 100],
        [400, 500, 'CD', 400],
        [500, 900, 'D', 500],
        [900, 1000, 'CM', 900],
        [1000, 3001, 'M', 1000]
      ]

    init();

    function init() {
      buildParsingRules();
    }

    function buildParsingRules() {
      rulesData.forEach(function(ruleData) {
        var rule = createRule(ruleData);
        addRule(rule);
      });
    }
    function createRule(ruleData) {
      var newRule = Object.create(abstractRule);
      
      var props = {
        greaterThanEquals: ruleData[0],
        lessThan: ruleData[1],
        symbol: ruleData[2],
        subtract: ruleData[3]
      };

      _.extend(newRule, props);

      return newRule;
    }

    function getRule(number) {
      var extractedRules = parsingRules.filter(function(rule) {
        return rule.doesRuleApplies(number)
      });

      return extractedRules[0];
    }

    function getAllRules() {
      return parsingRules;
    }
    
    function addRule(rule) {
      parsingRules.push(rule);
    }

    return {
      getRule: getRule,
      getAllRules: getAllRules,
      addRule: addRule
    }
  }

})(angular.module('app'))