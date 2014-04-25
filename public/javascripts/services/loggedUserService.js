define([], function(){
    return ['$rootScope','Restangular','$state', function($rootScope,Restangular,$state){
        this.loggedUser = null;

        this.login = function(name,password,redirectUrl){
            Restangular.one('UserLogin').get({name: name,password: password}).then(function(user){
                              sessionStorage.user = JSON.stringify(user);
                              this.loggedUser = user;
                              if(redirectUrl != null){
                                  $state.go(redirectUrl);
                              }
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

        this.update = function(user){
            Restangular.one('User').customPUT({_id: user._id,name: user.name,password:user.password,boards:user.boards}).then(function(){
                sessionStorage.user = JSON.stringify(user);
                $rootScope.$broadcast('userBoardAdded');
            });
        }
    }
]});