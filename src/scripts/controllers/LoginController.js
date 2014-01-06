app.controller('LoginController', ['$scope', '$location',function($scope, $location){ 

	$scope.$parent.menuShown = false;
	$scope.$parent.menuIconShown = false;


	$scope.login = function ( ) {
		$location.path('/list');
	};


}]);