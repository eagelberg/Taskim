define(['jquery', 'modal-popover'], function ($) {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/sidebar.html',
            scope: true,
            controller: function ($scope, boardManager) {

                $scope.ShowSidebar = true;
                $scope.showMemberInfo = false;
                $scope.showNewMemberDialog = false;
                $scope.isCollapsed = false;
                $scope.boardActivities = [];

                // preper demo model
                var micha = {
                    name: 'Micha Sherman',
                    initials: 'MS'
                }

                var itay = {
                    name: 'Itay Maoz',
                    initials: 'IM'
                }

                var guy = {
                    name: 'Guy Eagelberg',
                    initials: 'GE'
                }


                $scope.boardMembers = [micha, itay, guy];

                // TODO : fetch board from logged user (should also be periodic)

                boardManager.getAllBoards(micha).then(function (board) {
                    console.log('fetched board = ');
                    console.log(board);
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

                    // add demo activities
                    addActivity(randCard(board, notArchivedDecks), ['moved stuff to other stuff'], itay, 'activity');
                    addActivity(randCard(board, notArchivedDecks), ['They trapped me here!'], itay, 'comment');
                    addActivity(randCard(board, notArchivedDecks), ['went to temple bar', 'drank to much'], micha, 'activity');
                    addActivity(randCard(board, notArchivedDecks), ['came to gaus', 'did some stuff', 'became team leader'], guy, 'activity');
                    addActivity(randCard(board, notArchivedDecks), ['what the hell is that?'], guy, 'comment');

                    for (var i = 1; i < 15; i++) {
                        addActivity(randCard(board, notArchivedDecks), ['this is demo_' + i], guy, 'activity');
                    }
                    // --- end of demo section --- //
                    // accumulate all card activities

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

                var randomDate = function (start, end) {
                    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
                }

                var addActivity = function (card, activityInfo, initiator, type) {

                    var randDate = randomDate(new Date(2012, 0, 1), new Date());

                    if (!card.activities) {
                        card.activities = [];
                    }

                    card.activities.push({
                        date: randDate.getTime(),
                        initiator: initiator,
                        info: activityInfo,
                        type: type
                    });
                }


                var randCard = function (board, notArchivedDecks) {

                    var decksSize = notArchivedDecks.length;
                    var deckIndex = Math.floor(Math.random() * decksSize);
                    var randDeck = board.decks[deckIndex];
                    var cardsSize = randDeck.cards.length;
                    var cardIndex = Math.floor(Math.random() * cardsSize);
                    return randDeck.cards[cardIndex];

                }


                // handle ui logic
                $scope.closeSidebar = function () {
                    $scope.ShowSidebar = false;
                }

                $scope.toggleSidebar = function () {
                    $scope.ShowSidebar = true;
                    $scope.isCollapsed = !$scope.isCollapsed;
                }

                $scope.toggleMemberInfo = function(){
                    $scope.showMemberInfo = !$scope.showMemberInfo;
                }

                $scope.toggleNewMemberDialog = function(){
                    $scope.showNewMemberDialog = !$scope.showNewMemberDialog;
                }

            }
        }
    }
});
