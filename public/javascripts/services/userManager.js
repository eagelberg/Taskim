taskimApp.service('userManager',['Restangular',function(Restangular){
    this.getAllByFilter = function(filter){
        return Restangular.all('User').getList({name: filter})
    };

    this.addBoard = function(user,board){
        user.boards.push(board.id);
        user.put();
    }
}]);