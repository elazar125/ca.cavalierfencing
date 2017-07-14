angular.module('ca.cavalierfencing.mobile')

.controller('mobileController', function($scope, $routeParams) {
    $scope.page = $routeParams.page;
});
