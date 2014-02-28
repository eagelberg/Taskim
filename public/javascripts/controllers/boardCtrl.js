taskimApp.controller('boardCtrl',['$scope','boardManager', '$window','$stateParams', function($scope,boardManager,$window, $stateParams){

    $scope.board = {};
    $scope.canvasWidth = 100;
    $scope.maxHeight = ($window.innerHeight - 100);

    $scope.sortableOptions = {
        update:function (event, ui) {
          $scope.updateBoard();
        },
        connectWith: '.sort'
    }

    $scope.getBoard = function (boardId) {
        boardManager.  get(boardId).then(function(board) {
            $scope.setBoard(board);
        });
    };

    $scope.setBoard = function(board) {
        $scope.board = board;

        var deckWidth = 250;
        $scope.canvasWidth = (board.decks.length + 1) * (deckWidth + 100);
    }

    $scope.updateBoard = function() {
         boardManager.update($scope.board).then(function (board) {
            $scope.setBoard(board);
        });
    };

    $scope.createNewDeck = function(){
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
}]);

