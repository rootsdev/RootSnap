app.controller('ListController', ['$scope', '$location',function($scope, $location){ 
	$scope.$parent.menuShown = false;

	$scope.loadProfile = function(pid){
		$scope.$parent.pid = pid
		$location.path('/profile');
	}

}]);