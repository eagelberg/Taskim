define([], function() {
    return ['$scope','boardManager', '$window','$stateParams',
        function($scope,boardManager,$window, $stateParams) {
            $scope.board = {};
            $scope.canvasWidth = 100;
            $scope.isCollapsed = false;

            $scope.collapse = function() {
                $scope.isCollapsed = !$scope.isCollapsed;
            };
        
            $scope.isMemberAdderOpen = false;
        
            $scope.addMemberClicked = function(){
                $scope.isMemberAdderOpen = !$scope.isMemberAdderOpen;
            }
        
            $scope.getMembers = function(nameToSearch){
                return userManager.getAllByFilter(nameToSearch).then(function(result){
        
                    return result;
                });
            }
        
            $scope.accapteMember = function(){
        
            }
            
            $scope.archiveDeck= function(deck) {
                deck.isArchived = true;
                $scope.updateBoard();
            };

            $scope.getBoard = function (boardId) {
                boardManager.get(boardId).then(function(board) {
                    $scope.setBoard(board);
                });
            };

            $scope.setBoard = function(board) {
                $scope.board = board;

                var deckWidth = 250;
                var displayedDecks = _.filter(board.decks, function(deck){
                    return !deck.isArchived;
                });
                $scope.canvasWidth = (displayedDecks.length + 1) * (deckWidth + 100);
            };

            $scope.updateBoard = function() {
                boardManager.update($scope.board).then(function (board) {
                    $scope.setBoard(board);
                });
            };

            $scope.createNewDeck = function() {
                var newDeck = {name: $scope.newDeckName, _id: ""};
                $scope.board.decks.push(newDeck);
                $scope.updateBoard();
                $scope.newDeckName = "";
            };

            $scope.createNewCard = function(deck, cardTitle) {
                var newCard = {title: cardTitle, _id: ""};
                deck.cards.push(newCard);
                $scope.updateBoard();
                $scope.newCardTitle = "";
            };

            $scope.getBoard($stateParams.id);

            $scope.$apply();
        }]
    });