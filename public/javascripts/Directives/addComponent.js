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
                stickyTitle: '@',
                placeholderValue: '@',
                inputDisabled: '@',
                initEditMode: '@'
            },
            controller: function ($scope) {

                // defulat variables
                var defaultTriggerContainer = 'default-add-component-trigger';

                // initialize scope variables
                $scope.editMode = false;
                $scope.inputFocused = false;
                $scope.textAreaRows = $scope.textAreaRows || 2;
                $scope.triggerTitle = $scope.triggerTitle || '';
                $scope.placeholderValue = $scope.placeholderValue || '';
                $scope.triggerStyleContainer = $scope.triggerStyleContainer || defaultTriggerContainer;
                $scope.inputDisabled = $scope.inputDisabled || false;

                if(typeof $scope.initEditMode === 'undefined'){
                    $scope.initEditMode = false;
                }

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
                    console.log($scope.inputDisabled);
                    //if (!$scope.inputDisabled) {
                        $scope.editMode = true;
                        $scope.setFocused(true);
                    //}
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

                // invoke edit mode in case it is set in initial value
                if ($scope.initEditMode) {
                    //$scope.switchToEditMode();
                }

            }
        }
    }
});
