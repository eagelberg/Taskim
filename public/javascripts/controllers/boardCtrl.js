taskimApp.controller('boardCtrl',['$scope','$http',function($scope,$http){

    $scope.board = []

    $scope.getBoard = function () {
    $http.get('/Boards/52ff5e6044ae2e25ae9712ae').success(function (data) {
        $scope.board = data;
    })};

    $scope.getBoard();
}]);

