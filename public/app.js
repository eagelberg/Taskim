define([
    'angular',
    'restangular',
    'library/angular-strap',
    'angular-ui',
    'library/ui-bootstrap-tpls-0.10.0.min',
    'library/angular-dragdrop',
    'bootstrap',
    'library/sortable',
    'jquery-ui',
    'library/jquery-1.11.0',
    'controllers',
    'services',
    'directives'
], function (angular) {
    'use strict';

    return angular.module("taskimApp", ["mgcrea.ngStrap.navbar",
                                        'ui.router',
                                        'restangular',
                                        'ui.bootstrap.modal',
                                        'ui.bootstrap.tpls',
                                        'ui.sortable',
                                        'controllers',
                                        'services',
                                        'directives'])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/login");

                $stateProvider.state("login", {
                    url: '/login',
                    templateUrl: '/assets/partials/loginPage.html',
                    controller: 'loginCtrl'
                })
                    .state("userPage",{
                        url: '/userPage',
                        templateUrl: '/assets/partials/userPage.html',
                        controller: 'userCtrl'
                    })
                    .state("board", {
                        url: '/board/{id}',
                        templateUrl: '/assets/partials/boardPage.html',
                        controller: 'boardCtrl'
                    }
                )
                    .state("createUser",{
                        url: '/createUser',
                        templateUrl: '/assets/partials/createUser.html',
                        controller: 'createUserCtrl'
                    })
            }])
        .config(["$locationProvider", function($locationProvider) {
            $locationProvider.html5Mode(true).hashPrefix("!");
        }])
        .config(function(RestangularProvider){
            RestangularProvider.setRestangularFields({
                id: '_id'
            });
        });
});