'use strict'
angular.module('finalProjectApp')
	.controller('CreateGhostCtrl', function($scope, $location, CreateService){
			$scope.create=function(){
					$location.path('/create');
			};
			$scope.newGhost = function(bauble){
					CreateService.create(ghost)
					$location.path('/list')
			}
			$scope.ghost = CreateService.query();
	})