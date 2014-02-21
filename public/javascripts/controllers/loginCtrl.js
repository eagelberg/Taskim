taskimApp.controller('loginCtrl',['$scope','loggedUserService','$location',function($scope,loggedUserService, $location){
    $scope.user = {
        name : '',
        password : ''
    };

    $scope.board = []

    $scope.login = function(){
        loggedUserService.login($scope.user.name,$scope.user.password);
        loggedUserService.loggedUser.then(function(){
            if(loggedUserService.loggedUser != null){
                $location.path('/userPage');
            }
        });
    }

    $scope.reset = function(){
        $scope.user = {
            name : '',
            password : ''
        };
    }

    $scope.create = function(){
        //todo modal
        loggedUserService.create({name: "guy",password:"123456"})
    }
}]);
