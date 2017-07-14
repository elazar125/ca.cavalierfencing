angular.module('ca.cavalierfencing.desktop')

.controller('desktopController', function($scope, $routeParams) {
    $scope.page = $routeParams.page;
});
