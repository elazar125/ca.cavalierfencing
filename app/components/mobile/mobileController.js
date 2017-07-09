angular.module('ca.cavalierfencing.mobile')

.controller('mobileController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.page = $routeParams.page;
}]);
