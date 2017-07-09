angular.module('ca.cavalierfencing.mobile')

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/mobile/:page', {
        templateUrl: 'app/components/mobile/mobile.html',
        controller: 'mobileController'
    });

}]);
