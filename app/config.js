angular.module('ca.cavalierfencing')

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({ redirectTo: '/detect-browser' });

}]);
