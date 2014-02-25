var taskimApp = angular.module("taskimApp", ["mgcrea.ngStrap.navbar",'ui.router', 'restangular','ui.bootstrap.modal','ui.bootstrap.tpls', 'ui.sortable'])
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
                    url: '/board/:id',
                    templateUrl: 'assets/partials/boardPage.html',
                    controller: 'boardCtrl'
            }
        )
            .state("createUser",{
                url: '/createUser',
                templateUrl: 'assets/partials/createUser.html',
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


taskimApp.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        scope.getWindowDimensions = function () {
            return { 'h': w.height(), 'w': w.width() };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;

            scope.style = function () {
                return {
                    'height': (newValue.h - 100) + 'px',
                    'width': (newValue.w - 100) + 'px'
                };
            };

        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})
