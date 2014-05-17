define(['jquery'], function ($) {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActivitySection.html',
            scope: {
                context: '@',
                activities: '=',
                card: '='
            },
            link: function (scope) {
                var sidebar = $('#sidebar');
                scope.fixedHeight = sidebar[0].offsetHeight * 0.8;
            },
            controller: function ($scope, boardManager,loggedUserService) {

                $scope.activeUser = loggedUserService.getActiveUser();
                $scope.readOnly = false;

                if($scope.context === 'sidebar'){
                    $scope.readOnly = true;
                }

                $scope.addActivityComment = function (comment) {
                    var now = new Date();
                    $scope.card.activities.push({
                        date: now.getTime(),
                        initiator: $scope.activeUser,
                        info: [comment],
                        type: 'COMMENT'
                    });

                    boardManager.updateActiveBoard();

                    console.log("added comment : " + comment);
                }


            }
        }
    }
});
