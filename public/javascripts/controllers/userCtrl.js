taskimApp.controller('userCtrl',['$scope','loggedUserService','$state',function($scope,loggedUserService,$state){
    $scope.boards = loggedUserService.getUserBoards().$object

    $scope.choseBoard = function(board){
        $state.go('board',{id : board._id})
    };
}]);