define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/searchBar.html',
            scope: {},
            controller: function ($scope, boardManager, loggedUserService, $log) {

                $scope.activeUser = loggedUserService.getActiveUser();

                var syncDelay = 30000; // 30s

                // initialize variables
                $scope.userBoards = [];
                $scope.userCards = [];
                $scope.userChecklists = [];
                $scope.lastSyncTime = {};
                $scope.showSearchResults = false;

                var invokeSearch = function () {

                    console.log("active user = ");
                    console.log($scope.activeUser);

                    var now = new Date().getTime();

                    if ($scope.lastSyncTime && (now - $scope.lastSyncTime) < syncDelay) {
                        $log.info("passing sync..waiting for " + ((syncDelay - (now - $scope.lastSyncTime)) / 1000) + " seconds");
                        return;
                    }

                    // TODO : fetch real boards (currently fetching the last board of the user)
                    var boardId = $scope.activeUser.boards[$scope.activeUser.boards.length - 1];
                    console.log("fetching board " + boardId + " ..");

                    boardManager.get(boardId).then(function (board) {
                        console.log("fetched board " + boardId);
                        console.log(board);
                        var userBoards = [];
                        userBoards.push(board);
                        handleSearchResults(userBoards);
                    });
                }


                // TODO : should probably be in a service

                var handleSearchResults = function (boards) {

                    // initialize variables
                    $scope.userBoards = [];
                    $scope.userCards = [];
                    $scope.userChecklists = [];
                    $scope.lastSyncTime = {};

                    // scope ui variables
                    $scope.searchContentHovered = false;
                    $scope.focusSearchInput = true;

                    // iterate boards
                    boards.forEach(function (board) {

                        $scope.userBoards.push(board);
                        // iterate decks
                        board.decks.forEach(function (deck) {
                            if (!deck.isArchived) {
                                // iterate cards
                                deck.cards.forEach(function (card) {
                                    card.boardTitle = board.name;
                                    card.deckTitle = deck.name;
                                    $scope.userCards.push(card);

                                    if (card.checklists) {
                                        // iterate checklists
                                        card.checklists.forEach(function (checklist) {
                                            checklist.boardTitle = board.name;
                                            checklist.cardTitle = card.title;
                                            checklist.deckTitle = deck.name;
                                            $scope.userChecklists.push(checklist);
                                        });
                                    }

                                });
                            }
                        });
                    });

                    // create last search timestamp
                    $scope.lastSyncTime = new Date().getTime();
                    $log.info("synced data!");
                }

                // handle search content hide on blur
                $scope.handleBlur = function () {
                    console.log("bluring search bar");
                    if (!$scope.searchContentHovered) {
                        hideSearchContent();
                        setSearchInputFocused(false);
                    } else {
                        setSearchInputFocused(true);
                    }
                }

                $scope.handleSearchContentHoverOn = function () {
                    console.log("hovering on search content");
                    $scope.searchContentHovered = true;
                }

                $scope.handleSearchContentHoverOff = function () {
                    console.log("hovering off search content");
                    $scope.searchContentHovered = false;
                }

                var hideSearchContent = function () {
                    console.log("hiding search content");
                    $scope.showSearchResults = false;
                    $scope.searchQuery = '';
                }

                var setSearchInputFocused = function (toFocus) {
                    $scope.focusSearchInput = toFocus;
                }

                $scope.$watch('searchQuery', function (query) {
                    if (query && query.length > 1) {
                        $scope.showSearchResults = true;
                        invokeSearch();

                    } else {
                        $scope.showSearchResults = false;
                    }
                });

            }
        }
    }
});
