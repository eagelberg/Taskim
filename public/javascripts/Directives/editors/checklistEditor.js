define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/checklistEditor.html',
            scope: {
                card: '=',
                closeEditor: '&'
            },
            link: function (scope) {
                scope.focusChecklistTitleInput = true;
            },
            controller: function ($scope, boardManager) {

                $scope.handleChecklistAddition = function (checklistTitle) {
                    console.log("adding checklist..");

                    if (typeof $scope.card.checklists === 'undefined') {
                        $scope.card.checklists = [];
                    }

                    $scope.card.checklists.push({
                        title: checklistTitle,
                        items: [],
                        completed: 0
                    });

                    boardManager.updateActiveBoard();

                    // invoke close editor callback function
                    $scope.closeEditor({forceToggle: false});

                }

            }
        }
    }
});
