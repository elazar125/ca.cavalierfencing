angular.module('ca.cavalierfencing.desktop')

.config(function($routeProvider) {

    $routeProvider.when('/desktop/:page', {
        templateUrl: 'app/templates/desktop/desktop.html',
        controller: 'desktopController'
    });

});
