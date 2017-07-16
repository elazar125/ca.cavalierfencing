angular.module('ca.cavalierfencing')

.service('cfFacebook', function ($http) {

    return {
        getPhotos: getPhotos,
        getEvents: getEvents
    };

    function getPhotos(page, acess_token) {
        return get(page, acess_token, 'photos', 'images');
    }

    function getEvents(page, acess_token) {
        return get(page, acess_token, 'events', 'name,start_time,end_time,is_canceled');
    }

    function get(page, acess_token, edge, fields) {
        return $http({
            method: 'GET',
            url: `https://graph.facebook.com/v2.5/${ page }/${ edge }`,
            params: {
                access_token: access_token,
                fields: fields
            }
        });
    }
});