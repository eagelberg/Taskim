define([], function() {
    return function ($modal) {
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/card.html',
            controller: function($scope) {
                $scope.openModal = function() {
                    var modalInstance = $modal.open({
                        templateUrl: '/assets/partials/cardModal.html',
                        resolve: {
                            card: function() {
                                return $scope.card;
                            }
                        },
                        controller: function($scope, $modalInstance, card) {
                            $scope.card = card;
                        },
                        windowClass: "card-modal-window"
                    });
                }
            }
        }
    }
});
