define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/positionEditor.html',
            controller: function ($scope, boardManager) {

                // scope variables
                $scope.deck = {};
                $scope.userBoards = [];
                $scope.userBoards.push($scope.board); // TODO : get all user boards

                $scope.chosenBoard = {};
                $scope.chosedDeck = {};

                var findCardDeck = function () {
                    $scope.board.decks.forEach(function (iteratedDeck) {
                        iteratedDeck.cards.forEach(function (iteratedCard) {
                            if ($scope.card._id === iteratedCard._id) {
                                console.log("found card! : " + $scope.card._id);
                                $scope.deck = iteratedDeck;
                            }
                        });
                    });
                }

                var addCardToDeck = function (card, deckId) {
                    $scope.board.decks.forEach(function (iteratedDeck) {
                        if (iteratedDeck._id === deckId) {
                            iteratedDeck.cards.push(card);
                        }
                    });
                }

                var removeCardFromDeck = function (card, deck) {
                    var index = deck.cards.indexOf(card);
                    if (index > -1) {
                        deck.cards.splice(index, 1);
                    }
                }

                // find card appropriate deck
                findCardDeck();

                // initialize chosen values
                $scope.chosenBoard = $scope.board;
                $scope.chosedDeck = $scope.deck;

                // calculate card position
                $scope.cardPos = $scope.deck.cards.indexOf($scope.card) + 1;

                // set card positino options
                $scope.cardPosOptions = [];
                for (var i = 0; i < $scope.deck.cards.length; i++) {
                    $scope.cardPosOptions.push(i + 1);
                }

                $scope.moveCard = function (chosenBoard, chosedDeck, cardPos) {
                    console.log("moving card..");

                    // TODO : handle board transfer
                    // TODO : handle position update
                    if ($scope.deck._id !== chosedDeck._id) {
                        removeCardFromDeck($scope.card, $scope.deck);
                        addCardToDeck($scope.card, chosedDeck._id);
                    }

                    boardManager.updateActiveBoard();
                }
            }
        }
    }
});
