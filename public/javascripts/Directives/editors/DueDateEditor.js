define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/dueDateEditor.html',
            scope: {
                card: '=',
                closeEditor: '&'
            },
            link: function (scope) {
                scope.focusDueDateInput = true;
                scope.showDueDateCalendar = false

            },
            controller: function ($scope, boardManager) {

                // initialize scope variables
                $scope.chosenDate = new Date().getTime();
                $scope.chosenTime = new Date().getTime();

                if (typeof $scope.card.dueDate !== 'undefined') {
                    $scope.chosenDate = $scope.card.dueDate;
                    $scope.chosenTime = $scope.card.dueDate;
                }

                // handle scope logic
                $scope.handleDueDateEnter = function () {
                    $scope.showDueDateCalendar = !$scope.showDueDateCalendar;
                }

                $scope.handleSave = function (dueDate, time) {
                    console.log("saving date : ");
                    console.log(dueDate);
                    var dueTime = new Date();
                    dueTime.setTime(time)
                    console.log(dueTime);

                    // set due date time
                    if (typeof dueTime !== 'undefined') {
                        dueDate.setHours(dueTime.getHours(), dueTime.getMinutes(), 0, 0);
                    }else{
                        dueDate.setHours($scope.card.dueDate.getHours(), $scope.card.dueDate.getMinutes(), 0, 0);
                    }

                    $scope.card.dueDate = dueDate;
                    boardManager.updateActiveBoard();

                    hideDueDateEditor();

                }

                // handle scope ui logic
                var hideDueDateEditor = function () {
                    $scope.closeEditor({forceToggle: false});
                }
            }
        }
    }
});
