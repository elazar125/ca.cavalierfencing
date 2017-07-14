angular.module('ca.cavalierfencing.mobile')

.config(function($routeProvider) {

    $routeProvider.when('/mobile/:page', {
        templateUrl: 'app/templates/mobile/mobile.html',
        controller: 'mobileController'
    });

});
