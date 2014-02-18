taskimApp.controller('boardCtrl',['$scope','boardManager',function($scope,boardManager){

    $scope.board = []
//
//    $scope.getBoard = function () {
//    $http.get('/Boards/52ff5e6044ae2e25ae9712ae').success(function (data) {
//        $scope.board = data;
//    })};

    $scope.getBoard = function () {
        boardManager.get('52ff5e6044ae2e25ae9712ae').then(function(board) {
            $scope.board = board;
        });
    };

    function updateBoard() {
        $http.put('Boards/52ff5e6044ae2e25ae9712ae', $scope.board).success(function (data) {
            $scope.board = data;
        }).error(function (error) {
            $scope.newDeckName = error
        });
    }

    $scope.createNewDeck = function(){

        var newDeck = {name: $scope.newDeckName, _id: ""};
        $scope.board.decks.push(newDeck);

        updateBoard();
    }

    $scope.createNewCard = function(deckIndex, cardTitle) {
        var newCard = {title: cardTitle, _id: ""};
        $scope.board.decks[deckIndex].cards.push(newCard);

        updateBoard();
    }

    $scope.getBoard();

    $scope.newDeckName = 'itay';
}]);

