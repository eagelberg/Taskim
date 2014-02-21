var taskimApp = angular.module("taskimApp", ["mgcrea.ngStrap.navbar",'ui.router', 'restangular'])
    .config(['$stateProvider', '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider.state("login", {
            url: '/login',
            templateUrl: 'assets/partials/loginPage.html',
            controller: 'loginCtrl'
        })
            .state("userPage",{
            url: '/userPage',
                templateUrl: 'assets/partials/userPage.html',
                controller: 'userCtrl'
        })
            .state("board",{
                    url: '/board',
                    templateUrl: 'assets/partials/boardPage.html',
                    controller: 'boardCtrl'
            }
        );
    }])
    .config(["$locationProvider", function($locationProvider) {
         $locationProvider.html5Mode(true).hashPrefix("!");
    }])
    .config(function(RestangularProvider){
        RestangularProvider.setRestangularFields({
            id: '_id'
        });
    });
