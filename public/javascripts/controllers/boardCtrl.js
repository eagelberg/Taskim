define(['jquery'], function ($) {
    return ['$scope', 'boardManager', '$window', '$stateParams', 'userManager', 'loggedUserService',
        function ($scope,boardManager, $window, $stateParams, userManager, loggedUserService) {
            $scope.board = {};
            $scope.canvasWidth = 100;
            $scope.isCollapsed = false;
            $scope.newDeckName = '';
            $scope.isMemberAdderOpen = false;
            $scope.boardUsers = [];

            $scope.collapse = function () {
                $scope.isCollapsed = !$scope.isCollapsed;
            };

            $scope.addMemberClicked = function () {
                $scope.isMemberAdderOpen = !$scope.isMemberAdderOpen;
            }

            $scope.getMembers = function (nameToSearch) {
                var boardUsersIds = _.pluck($scope.boardUsers, '_id')
                return userManager.getAllByFilter(nameToSearch).then(function (result) {
                    return _.reject(result, function (user) {
                        return _.contains(boardUsersIds, user._id)
                    });
                });
            }

            $scope.getBoardMembers = function (boardId) {
                boardManager.getBoardUsers(boardId).then(function (users) {
                    $scope.boardUsers = users;
                });
            }

            $scope.acceptMember = function () {
                userManager.addBoard($scope.memberToAdd, $scope.board);
                boardManager.addUser($scope.board, $scope.memberToAdd).then(function () {
                    $scope.getBoardMembers($scope.board._id);
                });

                $scope.memberToAdd = "";
                $scope.addMemberClicked();
            }

            $scope.removeUser = function (user) {
                boardManager.removeUserFromBoard($scope.board, user).then(function () {
                    $scope.getBoard($stateParams.id);
                    $scope.getBoardMembers($stateParams.id);
                });
            }

            $scope.isCurrentUserAdmin = function () {
                return loggedUserService.loggedUser._id == $scope.board.adminId;
            }

            $scope.isCurrentMemberNotAdmin = function (user) {
                return user._id != $scope.board.adminId;
            }

            $scope.archiveDeck = function (deck) {
                deck.isArchived = true;
                $scope.updateBoard();
            };

            $scope.getBoard = function (boardId) {
                console.log("getBoard : getting board..");
                boardManager.get(boardId).then(function (board) {
                    console.log("getBoard : got board!");
                    boardManager.resolveBoardFetch(board);
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
                console.log("updateBoard : updating board..");
                boardManager.update($scope.board).then(function (board) {
                    console.log("updateBoard : updated board!");
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
                    var newCard = {title: newCardName, _id: "",index : deck.cards.length};
                    deck.cards.push(newCard);
                    $scope.updateBoard();
                }
            };

            $scope.updateDeckName = function (deck) {
                console.log('updating deck name to ' + deck.name);
            }

            $scope.getBoard($stateParams.id);
            $scope.getBoardMembers($stateParams.id);

            $scope.$apply();
        }]
});
