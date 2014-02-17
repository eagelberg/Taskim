taskimApp.controller('loginCtrl',['$scope','loggedUserService','$http',function($scope,loggedUserService, $http){
    $scope.user = {
        name : '',
        password : ''
    };

    $scope.board = []

    $scope.login = function(){
        loggedUserService.login($scope.name,$scope.password);
    }

    $scope.reset = function(){
        $scope.user = {
            name : '',
            password : ''
        };
    }


}]);
