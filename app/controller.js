angular.module('ca.cavalierfencing')

.controller('mainController', function($scope, $routeParams, cfFacebook) {
    $scope.events = cfFacebook.getEvents();
    $scope.photos = cfFacebook.getPhotos();
});
