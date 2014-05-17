define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActionSection.html',
            controller: function ($scope) {

                // scope variables
                $scope.showMemberEditor = {value : false};
                $scope.showChecklistEditor = {value : false};
                $scope.showLabelEditor = {value : false};
                $scope.showDueDateEditor = {value : false};

                // demo
                $scope.subscribed = false;
                $scope.members = $scope.card.members;

                // editor toggle functions
                $scope.toggleMemberEditor = function (forceToggle) {
                    handleEditorToggle($scope.showMemberEditor,forceToggle);
                }

                $scope.toggleChecklistEditor = function (forceToggle) {
                    handleEditorToggle($scope.showChecklistEditor,forceToggle);
                }

                $scope.toggleLabelEditorDialog = function (forceToggle) {
                    handleEditorToggle($scope.showLabelEditor,forceToggle);
                }

                $scope.toggleDueDateEditor = function (forceToggle) {
                    handleEditorToggle($scope.showDueDateEditor,forceToggle);
                }

                var handleEditorToggle = function(toggle,forceToggle){
                    hideAllEditors(toggle);

                    if (typeof forceToggle === 'undefined') {
                        toggle.value = !toggle.value;
                    }else{
                        toggle.value = forceToggle;
                    }
                }

                var hideAllEditors = function (currentEditor) {

                    // backup current editor value to restore it later
                    var currentEditorBackup = currentEditor.value;

                    $scope.showMemberEditor.value = false;
                    $scope.showChecklistEditor.value = false;
                    $scope.showLabelEditor.value = false;
                    $scope.showDueDateEditor.value = false;

                    currentEditor.value = currentEditorBackup;
                }

                // handle card actions
                $scope.toggleSubscription = function () {
                    $scope.subscribed = !$scope.subscribed;
                }

                $scope.archiveCard = function () {
                    console.log('archiving..');
                }

            }
        }
    }
});
