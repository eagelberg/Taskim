define(['angular',
        'javascripts/services/boardManager',
        'javascripts/services/loggedUserService',
        'javascripts/services/loginValidator',
        'javascripts/services/userManager'],
        function(angular, boardManager, loggedUserService, loginValidator,userManager) {
           'use strict';

            return angular.module('services',[])
                .service('boardManager', boardManager)
                .service('loggedUserService', loggedUserService)
                .service('userManager',userManager)
                .run(loginValidator);
        });