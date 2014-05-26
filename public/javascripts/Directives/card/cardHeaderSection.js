define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardHeaderSection.html',

            link: function (scope) {
                scope.showTitlePositionEditor = false;
            },

            controller: function ($scope, boardManager, loggedUserService) {

                $scope.toggleTitlePositionEditor = function () {
                    $scope.showTitlePositionEditor = !$scope.showTitlePositionEditor;
                }
            }
        }
    }
});
