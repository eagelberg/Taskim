define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/checklistItem.html',
            scope: {
                item: '=',
                checklist: '=',
                itemNameSave: '&',
                itemValueSave: '&',
                updateCompleted: '&'
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

                    // update progress bar with all completed values
                    $scope.updateCompleted({checklist: $scope.checklist});
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
