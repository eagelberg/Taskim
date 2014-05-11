define(['jquery', 'modal-popover'], function ($) {
        return function () {
            return {
                restrict: 'AE',
                templateUrl: '/assets/partials/popstar.html',
                transclude: true,
                scope: {
                    showPopstarValue: '=',
                    targetId: '@',
                    popstarId: '@',
                    matchTarget: '@',
                    popstarMaxWidth: '@'
                },
                link: function (scope, element, attrs) {


                    //defaults
                    var defaultTarget = 'target';
                    var defaultPopstar = 'popstar';
                    var defaultMatchTarget = false;
                    var defaultMaxWidth = 270;

                    // scope variables
                    scope.toggle = false;
                    scope.showTitle = true;
                    scope.fixedDisplay = 'none';
                    scope.fixedTop = 0;
                    scope.fixedLeft = 0;
                    scope.fixedWidth = 0;
                    scope.targetIdRep = '#' + scope.targetId;
                    scope.popstarIdRep = '#' + scope.popstarId;

                    // handle undefined values
                    if (typeof scope.targetId === 'undefined') {
                        scope.targetIdRep = '#' + defaultTarget;
                    }

                    if (typeof scope.popstarId === 'undefined') {
                        scope.popstarIdRep = '#' + defaultPopstar;
                    }

                    if (typeof scope.matchTarget === 'undefined') {
                        scope.matchTarget = defaultMatchTarget;
                    }

                    if (typeof scope.popstarMaxWidth === 'undefined') {
                        scope.fixedWidth = defaultMaxWidth;
                    }

                    // fix popstar position
                    var popstar = $(scope.popstarIdRep);

                    var target = $(scope.targetIdRep);
                    var targetPosition = target.offset();
                    var targetHeight = target[0].offsetHeight;
                    var targetWidth = target.width();
                    scope.fixedLeft = targetPosition.left;
                    scope.fixedTop = targetPosition.top + targetHeight + 20;
                    scope.fixedWidth = scope.popstarMaxWidth;

                    if (scope.matchTarget === 'true') {
                        console.log(popstar[0]);
                        scope.fixedWidth = targetWidth;
                    }

                },
                controller: function ($scope) {

                    $scope.$watch('showPopstarValue', function (showPopstar) {
                        if (typeof showPopstar === 'undefined') {
                            return;
                        }

                        $scope.togglePopstar();
                    });

                    $scope.togglePopstar = function () {
                        $scope.toggle = !$scope.toggle;

                        if ($scope.toggle) {
                            showPopstar();
                        } else {
                            hidePopstar();
                        }
                    }

                    $scope.handleBlur = function () {
                        //hidePopstar();
                    }

                    var showPopstar = function () {
                        $scope.fixedDisplay = 'block';
                    }

                    var hidePopstar = function () {
                        $scope.fixedDisplay = 'none';
                    }
                }
            }
        }
    }
);
