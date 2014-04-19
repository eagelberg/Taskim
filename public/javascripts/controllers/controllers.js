define(['angular'], function (angular) {
    'use strict';

    return angular.module('controllers',[])
           .controller('loginCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/loginCtrl'], function(loginCtrl) {
                $injector.invoke(loginCtrl, this, {'$scope': $scope});
            });
        }])
        .controller('navigationCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/navigationCtrl'], function(navigationCtrl) {
                $injector.invoke(navigationCtrl, this, {'$scope': $scope});
            });
        }]);
});