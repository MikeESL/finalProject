angular.module('finalProjectApp')
.controller('RecentCtrl', function($scope, $http) {
    $http.get('ghost.json').then(
      function(ghost){
        $scope.ghost = ghost.data;
      }
    );
    $scope.orderProp = 'age';
    $scope.quantity = 3;
  }
);