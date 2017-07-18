angular.module('ca.cavalierfencing.mobile')

.controller('mobileController', function($scope, $routeParams, cfFacebook) {
    $scope.events = cfFacebook.getEvents();
    $scope.photos = cfFacebook.getPhotos();
});
