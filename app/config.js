angular.module('ca.cavalierfencing')

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.otherwise({ redirectTo: '/detect-browser' });

}]);
