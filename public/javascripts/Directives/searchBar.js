define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/searchBar.html',
            scope: {},
            controller: function ($scope, boardManager, $log) {

                // constants

                // tmp
                var micha = {
                    name: "Michael Sherman",
                    initials: 'MS'
                }

                var syncDelay = 30000; // 30s

                // initialize variables
                $scope.userBoards = [];
                $scope.userCards = [];
                $scope.userChecklists = [];
                $scope.lastSyncTime = {};
                $scope.showSearchResults = false;

                var invokeSearch = function () {

                    var now = new Date().getTime();

                    if ($scope.lastSyncTime && (now - $scope.lastSyncTime) < syncDelay) {
                        $log.info("passing sync..waiting for " + ((syncDelay - (now - $scope.lastSyncTime)) / 1000) + " seconds");
                        return;
                    }

                    // TODO : fetch real boards (currently fetching a single board from micha's user)
                    boardManager.getAllBoards(micha).then(function (board) {
                        var localBoards = [];
                        localBoards.push(board);
                        handleSearchResults(localBoards);
                    });
                }


                var handleSearchResults = function (boards) {

                    // initialize variables
                    $scope.userBoards = [];
                    $scope.userCards = [];
                    $scope.userChecklists = [];
                    $scope.lastSyncTime = {};

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

                                    // tmp (checklists will be saved in db)
                                    injectDemoChecklist(card);

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

                var injectDemoChecklist = function (card) {
                    if (!card.checklists) {
                        card.checklists = [];
                    }
                    card.checklists.push({
                        title: 'become rich',
                        items: [
                            {
                                name: 'rob a bank',
                                value: false
                            }

                        ],

                        completed: 0
                    });
                }


                $scope.$watch('searchQuery', function (query) {
                    if (query && query.length > 1) {
                        $scope.showSearchResults = true;
                        invokeSearch();

                    }else{
                        $scope.showSearchResults = false;
                    }
                });

            }
        }
    }
});
