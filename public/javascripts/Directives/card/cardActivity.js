define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/card/cardActivity.html',
            scope: true,
            controller: function ($scope, $timeout, $interval, DateService,boardManager) {

                $scope.parsedDate = '';
                $scope.isActivity = false;
                $scope.isComment = false;

                // set activity type
                if ($scope.activity.type === 'ACTIVITY') {
                    $scope.isActivity = true;
                } else if ($scope.activity.type === 'COMMENT') {
                    $scope.isComment = true;
                    $scope.comment = $scope.activity.info[0];
                }

                // fix date to be of the format example - Feb 14 at 1:28 pm
                $scope.parsedDate = DateService.parseDate($scope.activity.date);

                $timeout(function () {
                    $scope.parsedDate = DateService.parseDate($scope.activity.date);
                }, 5000);

                $interval(function () {
                    $scope.parsedDate = DateService.parseDate($scope.activity.date);
                }, 60000);

                // activity logic handling
                $scope.updateActivityComment = function (activity, comment) {
                    activity.info[0] = comment;
                    boardManager.updateActiveBoard();
                    console.log('updating activity comment to ' + comment);
                }
            }
        }
    }
});
