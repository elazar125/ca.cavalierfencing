'use strict';

angular.module('ca.cavalierfencing', [
    'ngRoute',
    'ngMap',
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

angular.module('ca.cavalierfencing.detect-browser', ['ngRoute']);
angular.module('ca.cavalierfencing.desktop',        ['ngRoute']);
angular.module('ca.cavalierfencing.mobile',         ['ngRoute']);
angular.module('ca.cavalierfencing.description',    ['ngRoute']);
angular.module('ca.cavalierfencing.contact',        ['ngRoute']);
angular.module('ca.cavalierfencing.gallery',        ['ngRoute']);
angular.module('ca.cavalierfencing.events',         ['ngRoute']);
angular.module('ca.cavalierfencing.registration',   ['ngRoute']);
angular.module('ca.cavalierfencing.error',          ['ngRoute']);
