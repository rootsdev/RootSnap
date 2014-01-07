/*! RootSnap - v0.0.1 - 2014-01-07
* Copyright (c) 2014 ; Licensed  */
app.directive('appMenuContent', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'htmlPartials/appMenuContent.html'
    };
});
app.directive('appMenuHeader', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'htmlPartials/appMenuHeader.html'
    };
});
app.directive('mainAppNavigation', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'htmlPartials/mainAppNavigation.html'
    };
});
app.controller('ListController', ['$scope', '$location',function($scope, $location){ 
	$scope.$parent.menuShown = false;

	$scope.loadProfile = function(pid){
		$scope.$parent.pid = pid
		$location.path('/profile');
	}

}]);
app.controller('LoginController', ['$scope', '$location',function($scope, $location){ 

	$scope.$parent.menuShown = false;
	$scope.$parent.menuIconShown = false;


	$scope.login = function ( ) {
		$location.path('/list');
	};


}]);
app.controller('LogoutController', ['$scope', function($scope) {
	
	$scope.$parent.menuShown = false;
	$scope.$parent.menuIconShown = false;

}]);
app.controller('MenuAndNavController', ['$scope', function($scope) {

    $scope.menuShown = false;
	$scope.menuIconShown = true;

    $scope.toggleMenu = function() {
        $scope.menuShown = !$scope.menuShown;
    }
}]);
app.controller('PhotoController', ['$scope', function($scope) {
	$scope.$parent.menuShown = false;
}]);
app.controller('ProfileController', ['$scope', function($scope) {
	$scope.$parent.menuShown = false;
	alert($scope.$parent.pid);
}]);