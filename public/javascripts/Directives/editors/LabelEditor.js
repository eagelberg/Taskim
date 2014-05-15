define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/labelEditor.html',
            scope: {
                labels: '=',
                cardLabels: '='
            },
            controller: function ($scope) {

                // scope variables
                $scope.labelEditMode = true;
                $scope.labelTitleEditMode = false;

                $scope.handleLabelSelection = function (label) {
                    var indexOfLabel = $scope.cardLabels.indexOf(label);
                    if (indexOfLabel >= 0) {
                        $scope.cardLabels.splice(indexOfLabel, 1);
                    } else {
                        $scope.cardLabels.push(label);
                    }
                    console.log($scope.cardLabels);
                }

                $scope.switchToTitleEditMode = function () {
                    $scope.labelEditMode = !$scope.labelEditMode;
                    $scope.labelTitleEditMode = !$scope.labelTitleEditMode;
                }

                $scope.handleSave = function () {
                    console.log("saving label title changes..");
                    // TODO : save changes
                    $scope.handleBack();
                }

                $scope.handleBack = function () {
                    $scope.labelEditMode = !$scope.labelEditMode;
                    $scope.labelTitleEditMode = !$scope.labelTitleEditMode;
                }

                $scope.isPartOfCardLabel = function (boardLabel) {
                    if (typeof $scope.cardLabels != 'undefined') {
                        return $scope.cardLabels.indexOf(boardLabel) >= 0;
                    }

                    return false;
                }
            }
        }
    }
});
