(function(module) {

  'use strict';

  module.factory('converter', converter);

  converter.$inject = ['rulesEngine']

  function converter(rulesEngine) {

    return {
      convertToRoman: convertToRoman,
      convertToDecimal: convertToDecimal
    }

    function convertToRoman(number) {
      var builder = '',
        rule;

      rule = rulesEngine.getRule(number);

      while (rule !== undefined) {
        builder += rule.symbol;
        number -= rule.subtract;
        rule = rulesEngine.getRule(number);
      }

      builder += convertSingleDigitToRoman(number);

      return builder;
    }

    function convertToDecimal() {
      //TODO
    }

    function convertSingleDigitToRoman(number) {
      var symbols = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        result;

      result = symbols[number - 1] || '';

      return result;
    }
  }

})(angular.module('app'));