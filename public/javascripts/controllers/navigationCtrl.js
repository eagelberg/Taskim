taskimApp.controller('navigationCtrl',['$scope','boardManager','$modal','loggedUserService' ,function($scope,boardManager,$modal,loggedUserService) {
    var modalInstance

    $scope.openCreateBoardModal = function () {
        modalInstance = $modal.open({
                templateUrl: 'assets/templates/addBoard.html',
                controller: addBoardCtrl
            }
        );
    }

    var addBoardCtrl = function ($scope, $modalInstance) {
        $scope.board = {};

        $scope.create = function () {
            boardManager.create($scope.board).then(function(board){
                loggedUserService.loggedUser.boards.push(board._id);
                loggedUserService.update(loggedUserService.loggedUser);
            });
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    };
}]);