define([],function () {
    return ['$scope','userManager','$location',function($scope,userManager,$location){
        $scope.newUser = null;
        $scope.save = function(){
            userManager.create($scope.newUser);
            $location.path('/login');
        }
    }];
});