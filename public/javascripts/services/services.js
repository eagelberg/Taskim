define(['angular',
        'javascripts/services/boardManager',
        'javascripts/services/loggedUserService',
        'javascripts/services/loginValidator'],
        function(angular, boardManager, loggedUserService, loginValidator) {
           'use strict';

            return angular.module('services',[])
                .service('boardManager', boardManager)
                .service('loggedUserService', loggedUserService)
                .run(loginValidator);
        });