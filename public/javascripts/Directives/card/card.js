define([], function () {
    return function ($modal) {
        return {
            restrict: 'E',
            templateUrl: '/assets/partials/card/card.html',

            controller: function ($scope) {

                $scope.showCardActions = false;

                $scope.handleMouseOver = function () {
                    $scope.showCardActions = true;
                }

                $scope.handleMouseLeave = function () {
                    $scope.showCardActions = false;
                }

                $scope.openModal = function () {
                    var modalInstance = $modal.open({
                        templateUrl: '/assets/partials/card/cardModal.html',
                        resolve: {
                            card: function () {
                                return $scope.card;
                            },

                            board: function () {
                                return $scope.board;
                            }
                        },
                        controller: function ($scope, $modalInstance, card, board, boardManager, loggedUserService) {
                            $scope.card = card;
                            $scope.board = board;

                            console.log("board = ");
                            console.log(board);

                            // set board as the current active board (so it will be visible to any controller)
                            boardManager.setActiveBoard(board);
                            $scope.activeUser = loggedUserService.getActiveUser();

                        },
                        windowClass: "card-modal-window"
                    });
                }
            }
        }
    }
});
