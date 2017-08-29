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
                name: 'MFA Open House',
                description: 'Hosted at Sport Manitoba, 145 Pacific Avenue',
                start_time: '2017-09-16T13:00:00.000',
                end_time: '2017-09-16T16:00:00.000',
                image: '/resources/images/mfa-logo.gif',
                link: 'http://www.fencing.mb.ca/events/?cid=mc-6bea5a7e02f8f5e2945b6f6b1bbf9266&mc_id=142',
                is_canceled: false
            },
            {
                name: 'Opening Night! Welcome Returning Members!',
                description: 'We want to kick the new season off by welcoming our back our returning members. We\'ll get you back in the loop after the summer break.',
                start_time: '2017-09-14T19:00:00.000',
                end_time: '2017-09-14T20:30:00.000',
                image: '/resources/images/1.jpg',
                link: 'https://www.facebook.com/events/274751626362141',
                is_canceled: false
            },
            {
                name: 'Opening Night! Welcome New Members!',
                description: 'Today, we\'ll start off with the basics for brand new fencers. If you\'ve ever wanted to try out fencing, come on down today!',
                start_time: '2017-09-18T19:00:00.000',
                end_time: '2017-09-18T20:30:00.000',
                image: '/resources/images/2.jpg',
                link: 'https://www.facebook.com/events/1482227965198752',
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
