define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActionSection.html',
            controller: function ($scope) {

                // scope variables
                $scope.showCardMembersDialog = false;
                $scope.showNewChecklistDialog = false;

                $scope.toggleCardMembersDialog = function () {
                    $scope.showCardMembersDialog = !$scope.showCardMembersDialog;
                }

                $scope.toggleNewChecklistDialog = function(){
                    $scope.showNewChecklistDialog = !$scope.showNewChecklistDialog;

                }
            }
        }
    }
});
