taskimApp.service('loggedUserService',['$scope',function($scope){
    this.loggedUser = null;

    this.login = function(name,password){
        //todo validate user
        this.loggedUser = {name : 'fsd' ,permissions : 'public'};
    }
}])