'use strict';

angular.module('ca.cavalierfencing', [
    'ngRoute',
    'ngMap',
    'ngtweet',
    'ca.cavalierfencing.detect-browser',
    'ca.cavalierfencing.desktop',
    'ca.cavalierfencing.mobile',
    'ca.cavalierfencing.description',
    'ca.cavalierfencing.contact',
    'ca.cavalierfencing.gallery',
    'ca.cavalierfencing.events',
    'ca.cavalierfencing.registration',
    'ca.cavalierfencing.error'
]);

angular.module('ca.cavalierfencing.detect-browser', []);
angular.module('ca.cavalierfencing.desktop', []);
angular.module('ca.cavalierfencing.mobile', []);
angular.module('ca.cavalierfencing.description', []);
angular.module('ca.cavalierfencing.contact', []);
angular.module('ca.cavalierfencing.gallery', []);
angular.module('ca.cavalierfencing.events', []);
angular.module('ca.cavalierfencing.registration', []);
angular.module('ca.cavalierfencing.error', []);
