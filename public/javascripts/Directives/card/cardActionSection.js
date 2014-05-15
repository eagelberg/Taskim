define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActionSection.html',
            controller: function ($scope) {

                // scope variables
                $scope.showMemberEditor = false;
                $scope.showChecklistEditor = false;
                $scope.showLabelEditor = false;
                $scope.showDueDateEditor = false;

                // demo
                $scope.subscribed = false;

                // editor toggle functions
                $scope.toggleMemberEditor = function(){
                    $scope.showMemberEditor = !$scope.showMemberEditor;
                }

                $scope.toggleChecklistEditor = function(){
                    $scope.showChecklistEditor = !$scope.showChecklistEditor;
                }

                $scope.toggleLabelEditorDialog = function(){
                    $scope.showLabelEditor = !$scope.showLabelEditor;
                }

                $scope.toggleDueDateEditor = function(){
                    $scope.showDueDateEditor = !$scope.showDueDateEditor;
                }

                // handle card actions
                $scope.toggleSubscription = function(){
                    $scope.subscribed = !$scope.subscribed;
                }

                $scope.archiveCard = function(){
                    console.log('archiving..');
                }
            }
        }
    }
});
