angular.module('ca.cavalierfencing.desktop')

.controller('desktopController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.page = $routeParams.page;
}]);
