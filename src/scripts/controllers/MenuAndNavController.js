app.controller('MenuAndNavController', ['$scope', function($scope) {

    $scope.menuShown = false;
	$scope.menuIconShown = true;

    $scope.toggleMenu = function() {
        $scope.menuShown = !$scope.menuShown;
    }
}]);