(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchText = "";

    $scope.displayAlert = function(){
    
      var check = 0;
      var stringToSplit = $scope.lunchText;
      var arrayString = stringToSplit.split(",");
      check = arrayString.length;

      if(check > 3){
        $scope.message = "Too much!";
      }
      else if(check == 1 && $scope.lunchText == ""){
        $scope.message = "Please enter data first";
      }
      else{
        $scope.message = "Enjoy!";
      }

      $scope.hideIt = "false";
      $scope.showIt = true;
    };

  };

})();
