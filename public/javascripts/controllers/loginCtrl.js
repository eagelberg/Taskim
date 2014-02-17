taskimApp.controller('loginCtrl',['$scope','loggedUserService',function($scope,loggedUserService){
    $scope.user = {
        name : '',
        password : ''
    };


    $scope.login = function(){
        loggedUserService.login($scope.name,$scope.password);
    }

    $scope.reset = function(){
        $scope.user = {
            name : '',
            password : ''
        };
    }
}])
