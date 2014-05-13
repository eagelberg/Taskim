define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/checklistEditor.html',
            link: function (scope) {
                scope.focusChecklistTitleInput = true;
            },
            controller: function ($scope, boardManager) {

                $scope.handleAddChecklist = function () {
                    console.log("adding checklist..");
                }

            }
        }
    }
});
