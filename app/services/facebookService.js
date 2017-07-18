angular.module('ca.cavalierfencing')

.service('cfFacebook', function ($http) {

    return {
        getPhotos: getPhotos,
        getEvents: getEvents
    };

    function getPhotos(page, acess_token) {
        return [
            '/resources/images/1.jpg',
            '/resources/images/2.jpg',
            '/resources/images/3.jpg',
            '/resources/images/4.jpg',
            '/resources/images/5.jpg',
        ];
        // return get(page, acess_token, 'photos', 'images');
    }

    function getEvents(page, acess_token) {
        return [
            {
                name: 'one',
                description: 'this is an event',
                start_time: '2017-07-01T19:00:00.000',
                end_time: '2017-07-01T20:30:00.00',
                image: '/resources/images/1.jpg',
                is_canceled: false
            },
            {
                name: 'two',
                description: 'this is an event',
                start_time: '2017-07-08T19:00:00.000',
                end_time: '2017-07-08T20:30:00.00',
                image: '/resources/images/2.jpg',
                is_canceled: false
            },
            {
                name: 'three',
                description: 'this is an event with a really long description that goes over the edge and has the overflow hidden rather than pushing things around in weird ways',
                start_time: '2017-07-15T19:00:00.000',
                end_time: '2017-07-15T20:30:00.00',
                image: '/resources/images/3.jpg',
                is_canceled: false
            },
            {
                name: 'four',
                description: 'this is a canceled event',
                start_time: '2017-07-22T19:00:00.000',
                end_time: '2017-07-22T20:30:00.00',
                image: '/resources/images/4.jpg',
                is_canceled: true
            },
            {
                name: 'five',
                description: 'this is an event',
                start_time: '2017-07-29T19:00:00.000',
                end_time: '2017-07-29T20:30:00.00',
                image: '/resources/images/5.jpg',
                is_canceled: false
            }
        ];
        // return get(page, acess_token, 'events', 'name,start_time,end_time,is_canceled');
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
