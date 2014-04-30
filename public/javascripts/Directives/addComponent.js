define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/addComponent.html',
            scope: {
                editedInput: '=',
                callbackFunction: '&',
                inputStyle: '@',
                triggerStyleContainer: '@',
                triggerTitle: '@',
                onSaveTitle: '@',
                closeOnSave: '@'
            },
            controller: function ($scope) {

                // initialize scope variables
                $scope.editMode = false;
                $scope.inputFocused = false;

                // handle view logic
                $scope.handleSave = function () {

                    if ($scope.editedInput && $scope.editedInput.length > 0) {
                        // invoke callback function
                        $scope.callbackFunction({});

                        if ($scope.closeOnSave === 'true') {
                            $scope.handleClose();
                        } else if ($scope.closeOnSave === 'false') {
                            $scope.editedInput = '';
                            $scope.switchToEditMode();
                        }
                    }
                }

                // handle view UI
                $scope.switchToEditMode = function () {
                    $scope.editMode = true;
                    $scope.setFocused(true);
                }

                $scope.handleClose = function () {
                    $scope.editMode = false;
                    $scope.editedInput = '';
                    $scope.setFocused(false);
                }

                $scope.setFocused = function (isFocused) {
                    $scope.inputFocused = isFocused;
                }

                $scope.handleBlur = function () {
                    // TODO : how to close edit mode and still save input? is it actually needed?
                    //$scope.handleClose();
                }

                $scope.handleEscape = function () {
                    $scope.handleClose();
                }
            }
        }
    }
});
