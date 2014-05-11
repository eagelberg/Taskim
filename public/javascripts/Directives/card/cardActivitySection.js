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
                scope.fixedHeight = sidebar.height() * 0.8;
                console.log('offsetHeight1 = ' + sidebar.offsetHeight);
                console.log('offsetHeight2 = ' + sidebar[0].offsetHeight);
                console.log('offsetHeight3 = ' + sidebar.attr('offsetHeight'));
                console.log(sidebar);
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
