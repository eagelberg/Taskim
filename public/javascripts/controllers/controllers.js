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
        }])
        .controller('boardCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/boardCtrl'], function(boardCtrl) {
                $injector.invoke(boardCtrl, this, {'$scope': $scope});
            });
        }])
        .controller('userCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/userCtrl'], function(userCtrl) {
                $injector.invoke(userCtrl, this, {'$scope': $scope});
            });
        }])
        .controller('createUserCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/createUserCtrl'], function(createUserCtrl) {
                $injector.invoke(createUserCtrl, this, {'$scope': $scope});
            });
        }]);
});