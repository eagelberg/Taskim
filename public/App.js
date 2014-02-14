var taskimApp = angular.module("taskimApp", ["mgcrea.ngStrap.navbar",'ngRoute'])
    .config(["$routeProvider", function($routeProvider) {
         $routeProvider.when("/login", {
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