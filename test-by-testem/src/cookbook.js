angular.module('cookbook', [])

	.controller('CookbookController', ['$scope', function ($scope) {

		console.log("running Cookbook controller");
		$scope.favFood = 'pierogies';

		var fib = (function() {
			var pp = 0, p = 1;
			return function() {
				var result = pp+p;
				pp = p;
				p = result;
				return result;
			}
		})();

		$scope.fib = [ fib(), fib(), fib(), fib(), fib() ];

	}])

;
