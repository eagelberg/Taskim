var taskimApp = angular.module("taskimApp", ["mgcrea.ngStrap.navbar",'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");

        $stateProvider.state("login", {
            url: '/login',
            templateUrl: 'assets/partials/loginPage.html',
            controller: 'loginCtrl'
        })
            .state("menu",{
            url: '/menu',
                templateUrl: 'assets/partials/loginPage.html',
                controller: 'loginCtrl'
        });
    }
    ])
    .config(["$locationProvider", function($locationProvider) {
         $locationProvider.html5Mode(true).hashPrefix("!");
    }]);

taskimApp.service('loggedUserService',function(){
    this.loggedUser = null;

    this.login = function(name,password){
        //todo validate user
        this.loggedUser = {name : 'fsd' ,permissions : 'public'};
    }
});

taskimApp.run(['$rootScope',"$location",'loggedUserService', function($rootScope,$location,loggedUserService) {
        $rootScope.$on( "$stateChangeStart", function(event, next, current) {
            if ( loggedUserService.loggedUser == null) {
                if ( next.templateUrl != "assets/partials/loginPage.html" ) {
                    $location.path( "/login" );
                }
            }
        });
    }]);