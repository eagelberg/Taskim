define(['angular','javascripts/services/boardManager','javascripts/services/loggedUserService'],
        function(angular, boardManager, loggedUserService) {
           'use strict';

            return angular.module('services',[])
                .service('boardManager', boardManager)
                .service('loggedUserService', loggedUserService);
        });