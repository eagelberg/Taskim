define(['jquery'], function ($) {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActivitySection.html',
            scope: {
                context: '@',
                activeUser: '=',
                activities: '=',
                card: '='
            },
            link: function (scope) {
                var sidebar = $('#sidebar');
                scope.fixedHeight = sidebar[0].offsetHeight * 0.8;
            },
            controller: function ($scope) {


                // TODO : should be part of a service
                $scope.addActivityComment = function (comment) {
                    var now = new Date();
                    $scope.card.activities.push({
                        date: now.getTime(),
                        initiator: $scope.activeUser,
                        info: [comment],
                        type: 'comment'
                    });

                    console.log("added comment : " + comment);
                }
            }
        }
    }
});
