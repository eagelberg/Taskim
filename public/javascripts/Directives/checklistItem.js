define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/checklistItem.html',
            scope: {
                item: '=',
                checklist: '=',
                itemNameSave : '&',
                itemValueSave : '&'
            },
            controller: function ($scope) {

                // initialize scope variables
                $scope.editMode = false;
                $scope.itemNameFocused = false;


                // handle view logic
                $scope.handleSave = function () {

                    if ($scope.item.name && $scope.item.name.length > 0) {
                        // invoke item name save
                        $scope.itemNameSave({});

                        $scope.handleClose();

                    }
                }

                $scope.handleItemValueChange = function () {

                    // invok item value save
                    $scope.itemValueSave({});

                    // update progress bar
                    // count completed value
                    var trueValues = 0;
                    var itemLen = $scope.checklist.items.length;

                    // handle empty checklist case
                    if (itemLen === 0) {
                        $scope.checklist.completed = 0;
                        return;

                    }
                    $scope.checklist.items.forEach(function (item) {
                        if (item.value) {
                            trueValues++;
                        }
                    });

                    $scope.checklist.completed = (trueValues / itemLen) * 100.0;

                    if ($scope.checklist.completed >= 0 && $scope.checklist.completed <= 34) {
                        $scope.checklist.progressBarType = "warning";
                    } else if ($scope.checklist.completed > 34 && $scope.checklist.completed <= 67) {
                        $scope.checklist.progressBarType = "info";
                    } else if ($scope.checklist.completed > 67) {
                        $scope.checklist.progressBarType = "success";
                    }
                }


                // handle view UI
                $scope.switchToEditMode = function () {
                    $scope.setEditMode(true);
                    $scope.setFocused(true);
                }

                $scope.handleClose = function () {
                    $scope.setEditMode(false);
                    $scope.setFocused(false);
                }

                $scope.setFocused = function (isFocused) {
                    $scope.itemNameFocused = isFocused;
                }

                $scope.setEditMode = function (isInEditMode) {
                    $scope.editMode = isInEditMode;
                }

                $scope.handleBlur = function () {
                    $scope.handleClose();
                }

                $scope.handleEscape = function () {
                    $scope.handleClose();
                }
            }
        }
    }
});
