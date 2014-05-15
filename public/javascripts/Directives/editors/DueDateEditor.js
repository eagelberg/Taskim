define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/dueDateEditor.html',
            link: function (scope) {
                scope.focusDueDateInput = true;
                scope.chosenDate = new Date().getTime();
                scope.chosenTime = new Date().getTime();
                scope.showDueDateCalendar = false;
            },
            controller: function ($scope) {

                $scope.handleDueDateEnter = function () {
                    $scope.showDueDateCalendar = !$scope.showDueDateCalendar;
                }

                $scope.handleSave = function (dueDate, time) {
                    dueDate.setTime(time);
                    $scope.showDueDateEditor = false;
                    console.log("saved date : ");
                    console.log(dueDate);
                }

            }
        }
    }
});
