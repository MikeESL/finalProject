'use strict';

angular.module('finalProjectApp')
  .controller('GhostCtrl',['$scope', '$location', 'GhostService', function ($scope, $location, GhostService) {
    $scope.ghosts = GhostService.getPosts();

    $scope.addPost = function() {
    	GhostService.newPost($scope.newPost);
    	$location.path('/list');
    };

    $scope.removePost = function(ghostId) {
    	GhostService.removePost(ghostId);
    };
  
  }]);