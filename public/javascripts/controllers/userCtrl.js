taskimApp.controller('userCtrl',['$scope','loggedUserService','boardManager',function($scope,loggedUserService){
    $scope.boards = loggedUserService.getUserBoards().$object;
}]);