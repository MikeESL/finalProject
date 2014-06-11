// -------- custom directive for AJAX call to Parse.com --//
// angular.module('finalProjectApp')
//       .directive('myDirective', function(){

//       })

      















// -------- standard directives ---------------------- //
// collapsable view more directive ----------//
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = true;
};
//-------- DatePicker directive ------//
var DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.newPost.date = new Date();
  };
  //$scope.today();

  $scope.clear = function () {
    $scope.newPost.date = null;
  };


  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
};