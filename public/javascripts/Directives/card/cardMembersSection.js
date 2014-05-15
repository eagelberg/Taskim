define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardMembersSection.html',
            scope: {
                members: '='
            },
            controller: function ($scope) {

                $scope.showMemberEditor = false;

                $scope.toggleMemberEditor = function(){
                    $scope.showMemberEditor = !$scope.showMemberEditor;
                }
            }
        }
    }
});
