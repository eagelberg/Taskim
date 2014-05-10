define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/member.html',
            scope: {
                context: '@',
                memberStyle: '@',
                user: '='

            },
            controller: function ($scope, $timeout) {
                $scope.inMemberPanel = false;
                /* in case the context of the member directive is member panel
                 then should show status and other member information */
                if ($scope.context === 'memberPanel') {
                    $scope.inMemberPanel = true;
                }


                var mockUserStatus = function () {
                    // status demo
                    var statusArray = ['active', 'idle', 'disconnected'];

                    var rand = Math.floor(Math.random() * 3);
                    if ($scope.user) {
                        $scope.user.status = statusArray[rand];
                    }

                    $timeout(function () {
                        mockUserStatus();
                    }, 30000);
                };

                mockUserStatus();
            }
        }
    }
});
