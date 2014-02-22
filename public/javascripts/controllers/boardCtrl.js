taskimApp.controller('boardCtrl',['$scope','boardManager', '$window',function($scope,boardManager,$window){

    $scope.board = {};
    $scope.canvasWidth = 100;
    $scope.maxHeight = ($window.innerHeight - 100);

    $scope.dropCallback = function (event, ui, deck) {
        if($scope.draggedFromDeck != deck) {
            var card = angular.element(ui.draggable.get(0)).scope().card;
            deck.cards.push(card);
            $scope.draggedFromDeck.cards = _.without($scope.draggedFromDeck.cards, card);
            $scope.$apply();
            $(ui.helper).hide();
            $scope.updateBoard();
        }
    };

    $scope.dragStartCallback = function(event, ui, card, deck) {
        $scope.draggedCard = card;
        $scope.draggedFromDeck = deck;
    };

    $scope.dragStopCallback = function(event, ui) {
        $(this).css('opacity', 1);
    }

    $scope.dropOptions = {
        accept: function(dropElement) {
            if(angular.element($(this).get(0)).scope().deck != $scope.draggedFromDeck) {
                return true;
            }

            return false;
        }
    }

    $scope.dragOptions= {
        revert: 'invalid',
        helper: function(event) {
            $copy = $(this).clone();
            $copy.css('width', this.clientWidth);
            $(this).css('opacity', 0.2);
            return $copy;
        },
        appendTo: 'body',
        placeholder: 'keep'
    };

    $scope.getBoard = function () {
        boardManager.get('52ff5e6044ae2e25ae9712ae').then(function(board) {
            $scope.setBoard(board);
        });
    };

    $scope.setBoard = function(board) {
        $scope.board = board;

        var deckWidth = 250;
        $scope.canvasWidth = board.decks.length * (deckWidth + 100);
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

    $scope.createNewCard = function(deckIndex, cardTitle) {
        var newCard = {title: cardTitle, _id: ""};
        $scope.board.decks[deckIndex].cards.push(newCard);
        $scope.updateBoard();
        $scope.newCardTitle = "";
    };

    $scope.getBoard();
}]);

