define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/sidebar/sidebar.html',
            controller: function ($scope, boardManager, loggedUserService, $state) {
                console.log("initalizing sidebar controller..");

                $scope.ShowSidebar = true;
                $scope.showMemberInfo = false;
                $scope.showNewMemberDialog = false;
                $scope.isCollapsed = false;
                $scope.boardActivities = []; // accumulating all board card activities
                $scope.activeUser = loggedUserService.getActiveUser();
                $scope.activeBoard = {};

                boardManager.getBoardPromise().then(function (fetchedBoard) {
                    console.log("fetched board in sidebar!");
                    $scope.activeBoard = fetchedBoard;
                    console.log($scope.activeBoard);
                    accumulateActivities($scope.activeBoard);

                });

                var accumulateActivities = function (board) {

                    var notArchivedDecks = [];
                    board.decks.forEach(function (deck) {
                        if (!deck.isArchived) {
                            notArchivedDecks.push(deck);
                        }
                    });

                    board.decks.forEach(function (deck) {
                        deck.cards.forEach(function (card) {
                            if (!card.activities) {
                                card.activities = [];
                            }
                            card.activities.forEach(function (activity) {
                                $scope.boardActivities.push(activity);
                            });
                        });
                    });

                    console.log("boardActivities = ");
                    console.log($scope.boardActivities);
                }

                // initiate activity accumlation
                //accumulateActivities(board);

                // handle ui logic
                $scope.closeSidebar = function () {
                    $scope.ShowSidebar = false;
                }

                $scope.toggleSidebar = function () {
                    $scope.ShowSidebar = true;
                    $scope.isCollapsed = !$scope.isCollapsed;
                }

                $scope.toggleMemberInfo = function () {
                    $scope.showMemberInfo = !$scope.showMemberInfo;
                }

                $scope.toggleNewMemberDialog = function () {
                    $scope.showNewMemberDialog = !$scope.showNewMemberDialog;
                }

            }
        }
    }
});
