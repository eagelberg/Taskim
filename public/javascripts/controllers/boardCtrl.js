taskimApp.controller('boardCtrl',['$scope','boardManager',function($scope,boardManager){

    $scope.board = {};
    $scope.canvasWidth = 100;

    $scope.getCanvasStyle = function() {
        return {width: $scope.canvasWidth + 'px'};
    }

    $scope.$watch('canvasWidth', function(){
        $scope.getCanvasStyle = function (){
           return {width: $scope.canvasWidth + 'px'};
        }});

    $scope.getBoard = function () {
        boardManager.get('52ff5e6044ae2e25ae9712ae').then(function(board) {
            $scope.board = board;

            var deckWidth = 250;
            $scope.canvasWidth = board.decks.length * (deckWidth + 100);
        });
    };

    $scope.updateBoard = function() {
         boardManager.update($scope.board).then(function (board) {
            $scope.board = board;
        });
    };

    $scope.createNewDeck = function(){
        var newDeck = {name: $scope.newDeckName, _id: ""};
        $scope.board.decks.push(newDeck);

        $scope.updateBoard();
    };

    $scope.createNewCard = function(deckIndex, cardTitle) {
        var newCard = {title: cardTitle, _id: ""};
        $scope.board.decks[deckIndex].cards.push(newCard);

        $scope.updateBoard();
    };

    $scope.getBoard();
}]);

