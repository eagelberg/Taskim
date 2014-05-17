define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/labelEditor.html',
            scope: {
                labels: '=',
                cardLabels: '='
            },
            controller: function ($scope, boardManager) {

                // scope variables
                $scope.labelEditMode = true;
                $scope.labelTitleEditMode = false;

                $scope.handleLabelSelection = function (label) {
                    var indexOfLabel = getIndexOfLabel(label);
                    if (indexOfLabel >= 0) {
                        $scope.cardLabels.splice(indexOfLabel, 1);
                        console.log("removed label " + label.color);
                    } else {
                        $scope.cardLabels.push(label);
                        console.log("added label " + label.color);
                    }

                    boardManager.updateActiveBoard();

                }

                $scope.switchToTitleEditMode = function () {
                    $scope.labelEditMode = !$scope.labelEditMode;
                    $scope.labelTitleEditMode = !$scope.labelTitleEditMode;
                }

                $scope.handleSave = function (updatedLabels) {
                    console.log("updated labels");
                    console.log(updatedLabels);

                    boardManager.updateActiveBoard();
                    $scope.handleBack();
                }

                $scope.handleBack = function () {
                    $scope.labelEditMode = !$scope.labelEditMode;
                    $scope.labelTitleEditMode = !$scope.labelTitleEditMode;
                }

                var getIndexOfLabel = function (labelToFind) {
                    var index = -1, iterator = 0;

                    if (typeof $scope.cardLabels === 'undefined') {
                        return index;
                    }

                    if ($scope.cardLabels.length === 0) {
                        return index;
                    }

                    $scope.cardLabels.forEach(function (label) {
                        if (label.color.toLowerCase().indexOf(labelToFind.color.toLowerCase()) != -1) {
                            index = iterator;
                            return;
                        }

                        iterator++;
                    });

                    return index;
                }

                $scope.isPartOfCardLabel = function (boardLabel) {
                    return getIndexOfLabel(boardLabel) >= 0;
                }
            }
        }
    }
});
