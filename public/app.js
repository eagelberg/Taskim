var taskimApp = angular.module("taskimApp", ["mgcrea.ngStrap.navbar",'ui.router'])
    .config(["$routeProvider", function($routeProvider) {
         $routeProvider.state("login", {
            url: '/login',
            templateUrl: 'assets/partials/loginPage.html',
            controller: 'loginCtrl'
        }).otherwise({
                redirectTo: "/login"
            });
    }
    ])
    .config(["$locationProvider", function($locationProvider) {
         $locationProvider.html5Mode(true).hashPrefix("!");
    }
    ]);