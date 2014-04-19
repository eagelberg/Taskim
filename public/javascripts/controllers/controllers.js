define(['angular', 'app'], function (angular, app) {
    'use strict';

    /* Controllers */

    return app.controller('loginCtrl', ['$scope', '$injector', function($scope, $injector) {
            require(['javascripts/controllers/loginCtrl'], function(loginCtrl) {
                // injector method takes an array of modules as the first argument
                // if you want your controller to be able to use components from
                // any of your other modules, make sure you include it together with 'ng'
                // Furthermore we need to pass on the $scope as it's unique to this controller
                $injector.invoke(loginCtrl, this, {'$scope': $scope});
            });
        }]);
});