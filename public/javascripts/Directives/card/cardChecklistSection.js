define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardChecklistSection.html',
            controller: function ($scope, boardManager) {

                $scope.updateCompleted = function (checklist) {
                    // count completed value
                    var trueValues = 0;
                    var itemLen = checklist.items.length;

                    // handle empty checklist case
                    if (itemLen === 0) {
                        checklist.completed = 0;
                        return;

                    }
                    checklist.items.forEach(function (item) {
                        if (item.value) {
                            trueValues++;
                        }
                    });

                    checklist.completed = (trueValues / itemLen) * 100.0;

                    if (checklist.completed >= 0 && checklist.completed <= 34) {
                        checklist.progressBarType = "warning";
                    } else if (checklist.completed > 34 && checklist.completed <= 67) {
                        checklist.progressBarType = "info";
                    } else if (checklist.completed > 67) {
                        checklist.progressBarType = "success";
                    }
                }


                // scope logic funtions
                $scope.handleItemNameSave = function (item) {
                    boardManager.updateActiveBoard();
                    console.log("updated item name to : " + item.name);
                }

                $scope.handleItemValueSave = function (item) {
                    boardManager.updateActiveBoard();
                    console.log("updated item name " + (item.name) + " to  " + item.value);
                }

                $scope.addChecklistItem = function (checklist, newItemName) {
                    checklist.items.push({
                        name: newItemName,
                        value: false
                    });

                    boardManager.updateActiveBoard();
                    console.log("added item : " + newItemName);
                }


            }
        }
    }
});
