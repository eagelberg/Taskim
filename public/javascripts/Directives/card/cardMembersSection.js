define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardMembersSection.html',
            link: function (scope) {
                scope.showMemberPanelEditor = false;
                scope.showMemberInfo = false;

            },
            controller: function ($scope) {

                $scope.toggleMemberPanelEditor = function () {
                    $scope.showMemberPanelEditor = !$scope.showMemberPanelEditor;
                }

                $scope.toggleMemberInfo = function () {
                    $scope.showMemberInfo = !$scope.showMemberInfo;
                }
            }
        }
    }
});
