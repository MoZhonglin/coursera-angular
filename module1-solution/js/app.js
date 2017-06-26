(function(){
  'use strict'

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  function LunchCheckController($scope) {

    $scope.dishesList = "";  // user's input
    $scope.msg = "";  // feedback of user's input
    $scope.borderStyle = "";
    $scope.fontColor = "";

    // button click event handler function
    $scope.checkLunch = function() {
      var cnt = 0, list = []
      list = $scope.dishesList.split(",")

      // deal with empty items
      for (var key in list) {
        if (list[key]) {
          cnt++
        }
      }

      if (cnt == 0) {
        $scope.msg = 'Please enter data first'
        $scope.fontColor = 'red'
        $scope.borderStyle = 'red_border'
      } else if (cnt <= 3) {
        $scope.msg = "Enjoy!"
        $scope.fontColor = 'green'
        $scope.borderStyle = 'green_border'
      } else {
        $scope.msg = "Too much!"
        $scope.fontColor = 'green'
        $scope.borderStyle = 'green_border'
      }

    }
  }

  LunchCheckController.$inject = ["$scope"];

})()
