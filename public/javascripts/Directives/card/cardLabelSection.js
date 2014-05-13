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
                $scope.toggleLabelEditorView = function () {
                    initLabelSelected();
                    $scope.showLabelEditor = true;
                }

                // label logic handling
                $scope.getLabelTitle = function (label) {
                    if (label.title && label.title.length > 0) {
                        return label.title;
                    } else {
                        return label.color + ' label (default)';
                    }
                }

                $scope.handleLabelSelection = function (label) {
                    initLabelSelected();
                    label.selected = true;
                    $scope.showLabelEditor = false;
                    console.log($scope.card.labels);
                }

                var initLabelSelected = function () {

                     $scope.card.labels.forEach(function (label) {
                        label.selected = false;
                    });
                }

            }
        }
    }
});
