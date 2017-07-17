angular.module('ca.cavalierfencing.desktop')

.controller('desktopController', function($scope, $routeParams, cfFacebook) {
    $scope.photos = cfFacebook.getPhotos();
});
