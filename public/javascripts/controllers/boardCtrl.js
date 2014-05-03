define([], function () {
    return ['$scope', 'boardManager', '$window', '$stateParams', 'userManager',
        function ($scope, boardManager, $window, $stateParams, userManager) {
            $scope.board = {};
            $scope.canvasWidth = 100;
            $scope.isCollapsed = false;
            $scope.newDeckName = '';

            $scope.collapse = function () {
                $scope.isCollapsed = !$scope.isCollapsed;
            };

            $scope.isMemberAdderOpen = false;

            $scope.addMemberClicked = function () {
                $scope.isMemberAdderOpen = !$scope.isMemberAdderOpen;
            }

            $scope.getMembers = function (nameToSearch) {
                return userManager.getAllByFilter(nameToSearch).then(function (result) {
                    return result;
                });
            }

            $scope.boardUsers = [];
            $scope.getBoardMembers = function(boardId){
                boardManager.getBoardUsers(boardId).then(function (users) {
                    $scope.boardUsers = users;
                });
            }

            $scope.getFirstLetters = function(userName){
                var words = userName.split(" ");
                var displayName = "";
                words.forEach(function(value,key){
                    displayName += value.charAt(0);
                });
                return displayName;
            }

            $scope.accapteMember = function () {
                userManager.addBoard($scope.memberToAdd, $scope.board);
                boardManager.addUser($scope.board, $scope.memberToAdd).then(function(){
                    $scope.getBoardMembers($scope.board._id);
                });

                $scope.memberToAdd = "";
                $scope.addMemberClicked();
            }

            $scope.archiveDeck = function (deck) {
                deck.isArchived = true;
                $scope.updateBoard();
            };

            $scope.getBoard = function (boardId) {
                boardManager.get(boardId).then(function (board) {
                    $scope.setBoard(board);
                });
            };

            $scope.setBoard = function (board) {
                $scope.board = board;

                var deckWidth = 250;
                var displayedDecks = _.filter(board.decks, function (deck) {
                    return !deck.isArchived;
                });
                $scope.canvasWidth = (displayedDecks.length + 1) * (deckWidth + 100);
            };

            $scope.updateBoard = function () {
                boardManager.update($scope.board).then(function (board) {
                    $scope.setBoard(board);
                });
            };

            $scope.createNewDeck = function (newDeckName) {

                if (newDeckName) {
                    var newDeck = {name: newDeckName, _id: ""};
                    $scope.board.decks.push(newDeck);
                    $scope.updateBoard();
                }
            };

            $scope.createNewCard = function (deck, newCardName) {

                if (newCardName) {
                    var newCard = {title: newCardName, _id: ""};
                    deck.cards.push(newCard);
                    $scope.updateBoard();
                }
            };

            $scope.updateDeckName = function(deck){
                console.log('updating deck name to ' + deck.name);
            }

            $scope.getBoard($stateParams.id);
            $scope.getBoardMembers($stateParams.id);

            $scope.$apply();
        }]
});
