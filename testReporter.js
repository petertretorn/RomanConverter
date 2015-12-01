(function(module) {
  'use strict';

  module.factory('testReporter', testReporter);

  function testReporter() {
    return {
      reportResultOfTest: reportResultOfTest
    };


    function reportResultOfTest(heading, testParts) {
      var numberOfCorrectParts = calculateCorrectParts(testParts),
        totalParts = testParts.length,
        caseResults = buildCaseResults(testParts),
        resultText ='\n' + numberOfCorrectParts + ' out of ' + totalParts + ' correct';

      
      console.log(heading + '\n');
      console.log(caseResults);
      console.log('\n' + numberOfCorrectParts + ' out of ' + totalParts + ' correct');
    }

    /* ------------------- private methods ------------------------------- */

    function calculateCorrectParts(testParts) {
      var correctParts;

      correctParts = testParts.filter(function(part) {
        return (part.result === true);
      });

      return correctParts.length;
    }

    function buildCaseResults(testParts) {
      var builder = [],
        resultText,
        text;

      testParts.forEach(function(part) {
        resultText = !!part.result ? 'passed' : 'failed';

        text = part.testCase + ' : ' + resultText;
        text += ', got: ' + part.actual + ', expected: ' + part.expected;

        builder.push(text);
      });

      return builder.join('\n');
    }
  }


})(angular.module('app'))