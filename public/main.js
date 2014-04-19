require.config({
    paths: {
        angular: 'library/angular',
        angularMocks: 'library/angular-mocks',
        lodash: 'library/lodash',
        'bootstrap' : 'library/bootstrap',
        'jquery' : 'library/jquery-1.11.0',
        'angular-ui' : 'library/angular-ui',
        'jquery-ui' : 'library/jquery-ui-1.10.4.custom.min',
        'restangular' : 'library/restangular',
        'controllers' : 'javascripts/controllers/controllers',
        'services' : 'javascripts/services/services'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            'deps':['angular'],
            'exports':'angular.mock'
        },
        'lodash' : {'exports' : '_'},
        'restangular' : ['angular', 'lodash'],
        'bootstrap' : ['jquery'],
        'angular-ui' : ['angular'],
        'jquery-ui' : ['jquery'],
        'library/angular-dragdrop' : ['angular'],
        'library/ui-bootstrap-tpls-0.10.0.min' : ['angular'],
        'jquery': {exports: 'jQuery'},
        'library/sortable' : ['angular'],
        'library/angular-strap' : ['angular']
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";
window.angular = require(['angular']);

require( [
    'lodash',
    'angular',
    'app'
], function(lodash, angular, app) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});