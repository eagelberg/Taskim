define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardLabelSection.html',
            scope: true,
            controller: function ($scope) {

                // initalize variables
                $scope.showLabelEditor = false;

                // label ui handling
                $scope.toggleLabelEditor = function () {
                    $scope.showLabelEditor = !$scope.showLabelEditor;
                }

                // label logic handling
                $scope.getLabelTitle = function (label) {
                    if (label.title && label.title.length > 0) {
                        return label.title;
                    } else {
                        return label.color + ' label (default)';
                    }
                }

                $scope.handleLabelSelection = function () {
                    $scope.showLabelEditor = !$scope.showLabelEditor;
                }
            }
        }
    }
});
