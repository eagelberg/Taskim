define([],function () {
    return ['$scope','loggedUserService','$location',function($scope,loggedUserService,$location){
        $scope.newUser = null;
        $scope.save = function(){
            loggedUserService.create($scope.newUser);
            $location.path('/login');
        }
    }];
});