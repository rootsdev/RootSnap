app.controller('ProfileController', ['$scope', function($scope) {
	$scope.$parent.menuShown = false;
	alert($scope.$parent.pid);
}]);