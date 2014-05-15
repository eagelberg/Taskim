define([], function () {
    return function () {
        return {
            restrict: 'AE',
            templateUrl: '/assets/partials/editors/memberEditor.html',
            link: function (scope) {
                scope.memberInputFocused = true;
            },
            controller: function ($scope, boardManager) {

            }
        }
    }
});
