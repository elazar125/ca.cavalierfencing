angular.module('ca.cavalierfencing.schedule')

.controller('scheduleController', function($scope, $routeParams, cfFacebook) {
    $scope.events = cfFacebook.getEvents();
});
