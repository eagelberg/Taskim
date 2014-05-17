define([], function () {
    return ['$rootScope', 'Restangular', '$state', 'userManager', '$q', function ($rootScope, Restangular, $state, userManager, $q) {
        this.loggedUser = null;

        this.login = function (name, password, redirectUrl) {
            console.log("invoking login..");
            Restangular.one('UserLogin').get({name: name, password: password}).then(function (user) {
                sessionStorage.user = JSON.stringify(user);
                this.loggedUser = user;
                if (redirectUrl != null) {
                    $state.go(redirectUrl);
                }
            });
        };

        this.getUserBoards = function () {
            console.log("getting user boards");
            return Restangular.one('User', this.loggedUser._id).all('Boards').getList();
        }

        this.setActiveUser = function (user) {
            this.loggedUser = user;
        }

        this.getActiveUser = function () {
            return this.loggedUser;
        }

        this.isUserLogged = function () {
            console.log("checking if user is logged in..");
            if (this.loggedUser == null) {
                if (sessionStorage.user == null) {
                    return false;
                }
                this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
                this.setActiveUser(this.loggedUser);
            }
            return true
        }

        this.update = function (user) {
            userManager.update(user).then(function () {
                sessionStorage.user = JSON.stringify(user);
                $rootScope.$broadcast('userBoardAdded');
            });
        }
    }
    ]
});
