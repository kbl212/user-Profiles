angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
      return $http.post('/api/login', user).then(function (response) {
          return response;
      })
    }
  }
});