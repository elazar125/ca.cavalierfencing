angular.module('ca.cavalierfencing')

.controller('mainController', function($scope, $routeParams, cfFacebook) {
    cfFacebook.getEvents()
        .then(
            (response) => $scope.events = response.data,
            (response) => console.log(response));

    cfFacebook.getPhotos()
        .then(
            (response) => $scope.photos = response.data,
            (response) => console.log(response));
});
