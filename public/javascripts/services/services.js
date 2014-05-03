define(['angular',
    'javascripts/services/boardManager',
    'javascripts/services/loggedUserService',
    'javascripts/services/loginValidator',
    'javascripts/services/userManager',
    'javascripts/services/DateService'],
    function (angular, boardManager, loggedUserService, loginValidator, userManager,DateService) {
        'use strict';

        return angular.module('services', [])
            .service('boardManager', boardManager)
            .service('loggedUserService', loggedUserService)
            .service('userManager', userManager)
            .service('DateService', DateService)
            .run(loginValidator);
    });
