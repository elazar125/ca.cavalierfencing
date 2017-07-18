angular.module('ca.cavalierfencing.desktop')

.controller('desktopController', function($scope, $routeParams, cfFacebook) {
    $scope.events = cfFacebook.getEvents();
    $scope.photos = cfFacebook.getPhotos();
});
