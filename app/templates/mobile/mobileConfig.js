angular.module('ca.cavalierfencing.mobile')

.config(function($routeProvider) {

    $routeProvider.when('/mobile', {
        templateUrl: 'app/templates/mobile/mobile.html',
        controller: 'mobileController'
    });

});
