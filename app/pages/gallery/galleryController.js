angular.module('ca.cavalierfencing.gallery')

.controller('galleryController', function($scope, $routeParams, cfFacebook) {
    $scope.photos = cfFacebook.getPhotos();
});
