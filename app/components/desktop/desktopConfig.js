angular.module('ca.cavalierfencing.desktop')

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/desktop/:page', {
        templateUrl: 'app/components/desktop/desktop.html',
        controller: 'desktopController'
    });

}]);
