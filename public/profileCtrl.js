angular.module('userProfiles')
.controller('profileCtrl', function( $scope, $http, userInfo ) {
    console.log(userInfo);
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});