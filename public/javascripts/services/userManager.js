define([],function(){
    return ['Restangular',function(Restangular){
        this.getAllByFilter = function(filter){
            return Restangular.all('User').getList({name: filter})
        };

        this.addBoard = function(user,board){
            user.boards.push(board._id);
            user.put();
        }
    }]
});