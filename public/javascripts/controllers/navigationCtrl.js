define([], function (){
   return ['$scope','boardManager','$modal','loggedUserService','$state',function($scope,boardManager,$modal,loggedUserService,$state) {
       var modalInstance;

       $scope.openCreateBoardModal = function () {
           modalInstance = $modal.open({
                   templateUrl: 'assets/templates/addBoard.html',
                   controller: addBoardCtrl
               }
           );
       };

       var addBoardCtrl = function ($scope, $modalInstance) {
           $scope.board = {};

        $scope.create = function () {
            boardManager.create($scope.board).then(function(board){
                loggedUserService.loggedUser.boards.push(board._id);
                loggedUserService.update(loggedUserService.loggedUser);
                $state.go('board',{id : board._id});
            });
            $modalInstance.close();
        };

           $scope.cancel = function () {
               $modalInstance.dismiss('cancel');
           };
       };

       $scope.$apply();
   }]
});