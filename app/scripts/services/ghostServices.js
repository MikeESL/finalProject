'use strict'
angular.module('finalProjectApp')
		.factory('GhostService', ['$firebase', 'FIREBASE_URI', function($firebase, FIREBASE_URI){
				var ref = new Firebase(FIREBASE_URI);
				var ghostPosts = $firebase(ref);
				var getPosts = function(){
							return ghostPosts;
				};
				var newPost = function(ghost){
							ghostPosts.$add(ghost);
				};
				var removePost = function(id){
							ghostPosts.$remove(id);
				};
//				var updatePost = function(id){
//							ghostPosts.$update(id);
//				};
				return{
						getPosts: getPosts,
						newPost: newPost,
						removePost: removePost
//						updatePost: updatePost
				}
				
}]);
						
							
						
		