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
                closeOnSave: '@',
                textAreaRows: '@',
                stickyTitle: '@'
            },
            controller: function ($scope) {

                // initialize scope variables
                $scope.editMode = false;
                $scope.inputFocused = false;
                $scope.textAreaRows = $scope.textAreaRows || 2;
                $scope.triggerTitle = $scope.triggerTitle || '';

                // handle view logic
                $scope.handleSave = function () {

                    if ($scope.editedInput && $scope.editedInput.length > 0) {
                        // invoke callback function
                        $scope.callbackFunction({});

                        if ($scope.closeOnSave === 'true') {
                            $scope.handleClose(true);
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

                $scope.handleClose = function (saveChanges) {

                    if ($scope.stickyTitle && $scope.stickyTitle === 'true') {
                        if ($scope.editedInput && $scope.editedInput.length > 0 && saveChanges) {
                            $scope.triggerTitle = $scope.editedInput;
                            $scope.inputDefaultValue = $scope.editedInput;
                        }
                    } else {
                        $scope.editedInput = '';
                    }

                    $scope.editMode = false;
                    $scope.setFocused(false);
                }

                $scope.setFocused = function (isFocused) {
                    $scope.inputFocused = isFocused;
                }

                $scope.handleBlur = function () {
                    // TODO : how to close edit mode and still save input? is it actually needed?
                    //$scope.handleClose(false);
                }

                $scope.handleEscape = function () {
                    $scope.handleClose(false);
                }

            }
        }
    }
});
