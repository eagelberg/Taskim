taskimApp.service('loggedUserService',['Restangular','$state', function(Restangular,$state){
    this.loggedUser = null;

    this.login = function(name,password,redirectUrl){
        Restangular.one('UserLogin').get({name: name,password: password}).then(function(user){
                          sessionStorage.user = JSON.stringify(user);
                          this.loggedUser = user;
                          $state.go(redirectUrl);
                      });
    };

    this.getUserBoards = function(){
        return Restangular.one('User',this.loggedUser._id).all('Boards').getList();
    }

    this.isUserLogged = function(){
        if(this.loggedUser == null)
        {
            if(sessionStorage.user == null ){
                return false;
            }
            this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
        }
        return true
    }

    this.create = function(user){
        Restangular.all('User').post(user);
    };
}]);