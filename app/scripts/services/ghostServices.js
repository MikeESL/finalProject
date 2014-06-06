'use strict'
angular.module('finalProjectApp')
		.factory('CreateService', function($resource){
				return $resource('https://ghostapp.firebaseio.com/list', {},
						{
							query:{
								method: 'GET',
								isArray: true
							},
							create:{
								method: 'POST'
							}
						});
		})