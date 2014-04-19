define([], function () {
    return ['$scope','loggedUserService',function($scope,loggedUserService){

        $scope.user = {
            name : '',
            password : ''
        };

        $scope.board = []

        $scope.login = function(){
            loggedUserService.login($scope.user.name,$scope.user.password,'userPage');
        }

        $scope.reset = function(){
            $scope.user = {
                name : '',
                password : ''
            };
        }

        $scope.$apply();
    }]
});

//taskimApp.controller('loginCtrl',['$scope','loggedUserService',function($scope,loggedUserService){
//    $scope.user = {
//        name : '',
//        password : ''
//    };
//
//    $scope.board = []
//
//    $scope.login = function(){
//        loggedUserService.login($scope.user.name,$scope.user.password,'userPage');
//    }
//
//    $scope.reset = function(){
//        $scope.user = {
//            name : '',
//            password : ''
//        };
//    }
//}]);
