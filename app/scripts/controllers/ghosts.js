'use strict';

angular.module('finalProjectApp')
  .controller('GhostCtrl',['$scope', '$location', 'GhostService', function ($scope, $location, GhostService) {
    $scope.ghosts = GhostService.getPosts();
    $scope.newPost = {
        photo: ""
    };

    $scope.addPost = function(newPost) {
    	GhostService.newPost(newPost);
    	$location.path('/list');
    };

    $scope.removePost = function(ghostId) {
    	GhostService.removePost(ghostId);
    };

  
  }]);
