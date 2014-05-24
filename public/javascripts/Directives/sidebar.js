define(['jquery', 'modal-popover'], function ($) {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/sidebar.html',
            scope: true,
            controller: function ($scope, boardManager, loggedUserService,$state) {

                $scope.ShowSidebar = true;
                $scope.showMemberInfo = false;
                $scope.showNewMemberDialog = false;
                $scope.isCollapsed = false;
                $scope.boardActivities = []; // accumulating all board card activities
                $scope.activeUser = loggedUserService.getActiveUser();
                $scope.activeBoard = {};


                var boardId = $scope.activeUser.boards[$scope.activeUser.boards.length - 1];
                console.log("fetching board " + boardId + " for sidebar..");

                boardManager.get(boardId).then(function (board) {
                    console.log('fetched boards for sidebar to user ' + $scope.activeUser.name);
                    $scope.activeBoard = board;
                    accumulateActivities(board);
                });

                var accumulateActivities = function (board) {
                    console.log("board in sidebar");
                    console.log(board);

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

                $scope.closeBoard = function(){
                    boardManager.delete($scope.board).then(function () {
                        $state.go('userPage');
                    });
                }

                $scope.leaveBoard = function(){
                    boardManager.removeUserFromBoard($scope.board, $scope.activeUser).then(function () {
                        $state.go('userPage');
                    });
                }
            }
        }
    }
});
