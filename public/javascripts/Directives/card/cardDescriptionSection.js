define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardDescriptionSection.html',
            controller: function ($scope, boardManager) {

                $scope.descriptionTriggerTitle = "Edit description..";

                if($scope.card.description && $scope.card.description.length > 0){
                    $scope.descriptionTriggerTitle = $scope.card.description;
                }

                $scope.updateCardDescription = function (updatedDescription) {
                    console.log("updated card description to : " + updatedDescription);
                    $scope.card.description = updatedDescription;
                    boardManager.updateActiveBoard();
                }
            }
        }
    }
});
