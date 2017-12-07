angular.module('ca.cavalierfencing')

.service('cfFacebook', function ($http) {
    const baseUrl = 'url';

    return {
        getPhotos: () => $http.get(baseUrl + 'photos'),
        getEvents: () => $http.get(baseUrl + 'events')
    };
});
