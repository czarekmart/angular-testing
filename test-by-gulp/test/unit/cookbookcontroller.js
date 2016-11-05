// To execute this test go to test folder and run:
// karma start karma.conf.basic-example.js

describe('CookbookController', function () {

	console.log("Executing test suite CookbookController");

	var CookbookController, scope;

	// load the controller's module

	//beforeEach(module('cookbook'));

	beforeEach(function() {
		module('cookbook');

		inject(function($controller, $rootScope){
			scope = $rootScope.$new();
			CookbookController = $controller('CookbookController', {
				$scope: scope
			});
		});
	});

	// Initialize the controller and a mock scope

	/*
	beforeEach(inject(function ($controller, $rootScope) {

		// place here mocked dependencies

		scope = $rootScope.$new();
		CookbookController = $controller('CookbookController', {
			$scope: scope
		});
	}));
	*/

	it('should create "favFood" with value = pierogies', function () {
		expect(scope.favFood).toBeDefined();
		expect(scope.favFood).toEqual('pierogies');
	});

	it('should create first 5 Fibonacci numbers', function () {
		expect(scope.fib).toBeDefined();
		expect(scope.fib.length).toBe(5);
		expect(scope.fib[0]).toEqual(1);
		expect(scope.fib[1]).toEqual(2);
		expect(scope.fib[2]).toEqual(3);
		expect(scope.fib[3]).toEqual(5);
		expect(scope.fib[4]).toEqual(8);
	});

});



