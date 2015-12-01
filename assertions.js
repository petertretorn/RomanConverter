(function(module) {
  'use strict';
  
  /*
    Only public facing methods are subject to unit tests. I prefer not to unittest private methods
    as it leads to disproportionate maintenance of test code when applying refactorings aggressively
  */

  assertions.$inject = ['converter', 'assertUtil', 'testReporter']
  module.factory('assertions', assertions);

  function assertions(converter, assertUtil, testReporter) {

    return {
      runTestSuite: runTestSuite
    }

    function runTestSuite() {
      canParseSingleDigitNumbersToRoman();
      canParseTwoDigitNumbersToRoman();
      canParseArbitraryNumbersToRoman();
    }

    function canParseSingleDigitNumbersToRoman() {
      var testParts = [],
          expected,
          actual,
          result;
  
      expected = 'I';
      actual = converter.convertToRoman(1);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 1 to roman', result, actual, expected) );

      expected = 'III';
      actual = converter.convertToRoman(3);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 3 to roman', result, actual, expected) );

      expected = 'V';
      actual = converter.convertToRoman(5);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 5 to roman', result, actual, expected) );
      
      expected = 'VI';
      actual = converter.convertToRoman(6);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 6 to roman', result, actual, expected) );

      expected = 'IX';
      actual = converter.convertToRoman(9);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 9 to roman', result, actual, expected) );
      
      //testReports.push(testReporter.reportResultOfTest('Can Parse Single Digit Number To Roman', testParts));
      testReporter.reportResultOfTest('Can Parse Single Digit Number To Roman', testParts);
    }
    
    function canParseTwoDigitNumbersToRoman() {
      var testParts = [],
          expected,
          actual,
          result;
  
      expected = 'X';
      actual = converter.convertToRoman(10);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 10 to roman', result, actual, expected) );
      //testParts.push( { testCase: 'can convert 10 to roman', result: result, actual: actual, expected: expected} );
      
      expected = 'XX';
      actual = converter.convertToRoman(20);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 20 to roman', result, actual, expected) );
  
  
      expected = 'XXIII';
      actual = converter.convertToRoman(23);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 23 to roman', result, actual, expected) );
      
      expected = 'LI';
      actual = converter.convertToRoman(51);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 51 to roman', result, actual, expected) );
      
      expected = 'XLVIII';
      actual = converter.convertToRoman(48);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 48 to roman', result, actual, expected) );
      
      expected = 'XCIV';
      actual = converter.convertToRoman(94);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 94 to roman', result, actual, expected) );
    
      //testReports.push(testReporter.reportResultOfTest('Can Parse Two-Digit Numbers To Roman', testParts))
      testReporter.reportResultOfTest('Can Parse Two-Digit Numbers To Roman', testParts);
    }
    
    function canParseArbitraryNumbersToRoman() {
      
      var testParts = [],
          expected,
          actual,
          result;
  
      expected = 'XC';
      actual = converter.convertToRoman(90);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 90 to roman', result, actual, expected) );
  
      expected = 'XCIX';
      actual = converter.convertToRoman(99);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 99 to roman', result, actual, expected) );
  
      expected = 'CDXCIX';
      actual = converter.convertToRoman(499);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 499 to roman', result, actual, expected) );
  
      expected = 'DCCLIII';
      actual = converter.convertToRoman(753);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 753 to roman', result, actual, expected) );
  
      expected = 'CMXCIX';
      actual = converter.convertToRoman(999);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 999 to roman', result, actual, expected) );
  
      expected = 'MCMVIII';
      actual = converter.convertToRoman(1908);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 1908 to roman', result, actual, expected) );
      
      expected = 'MCMXCIX';
      actual = converter.convertToRoman(1999);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 1999 to roman', result, actual, expected) );
    
      expected = 'CDXLIV';
      actual = converter.convertToRoman(444);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 444 to roman', result, actual, expected) );
    
      expected = 'MMCDXLIV';
      actual = converter.convertToRoman(2444);
      result = assertUtil.assertEquals(actual, expected);
      testParts.push( createPart('can convert 2444 to roman', result, actual, expected) );
    
      testReporter.reportResultOfTest('Can Parse Arbitrary Numbers To Roman', testParts);
    }
    
    function createPart(testCase, result, actual, expected) {
      return { testCase: testCase, result: result, actual: actual, expected: expected };
    }
  }
})(angular.module('app'));