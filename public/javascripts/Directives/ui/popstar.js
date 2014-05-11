define(['jquery'], function ($) {
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
                    popstarMaxWidth: '@',
                    popstarAlign: '@',
                    popstarTitle: '@'
                },
                link: function (scope, element, attrs) {
                    //defaults
                    var defaultTarget = 'target';
                    var defaultPopstar = 'popstar';
                    var defaultMatchTarget = 'false';
                    var defaultMaxWidth = 270;
                    var defaultAlign = 'left';

                    // scope variables
                    scope.toggle = false;
                    scope.showTitle = true;
                    scope.hasTitle = true;
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
                        scope.popstarMaxWidth = defaultMaxWidth;
                    }

                    if (typeof scope.popstarAlign === 'undefined') {
                        scope.popstarAlign = defaultAlign;
                    }

                    if (typeof scope.popstarTitle === 'undefined') {
                        scope.hasTitle = false;
                    }

                    // fix popstar position
                    var popstar = $(scope.popstarIdRep);
                    var target = $(scope.targetIdRep);

                    console.log('--- ' + scope.targetId + ' ---');

                    var targetHeight = target[0].offsetHeight;
                    console.log('targetHeight = ' + targetHeight);

                    var targetWidth = target[0].offsetWidth;
                    console.log('targetWidth = ' + targetWidth);

                    var targetLeft = target[0].offsetLeft;
                    console.log('targetLeft = ' + targetLeft);

                    var targetTop = target[0].offsetTop;
                    console.log('targetTop = ' + targetTop);

                    // handle width
                    scope.fixedWidth = scope.popstarMaxWidth;

                    if (scope.matchTarget === 'true') {
                        console.log('matchTarget to : ' + targetWidth);
                        scope.fixedWidth = targetWidth;
                    }

                    // handle left
                    if (scope.popstarAlign === 'center') {
                        scope.fixedLeft = targetLeft + targetWidth / 2 - scope.fixedWidth / 2;

                    } else if (scope.popstarAlign === 'left') {
                        scope.fixedLeft = targetLeft;
                    }

                    // handle top
                    scope.fixedTop = targetTop + targetHeight + 2;

                    console.log('fixedWidth = ' + scope.fixedWidth + ',fixedLeft = ' + scope.fixedLeft + ',fixedTop = ' + scope.fixedTop);


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

                    $scope.handleClose = function () {
                        hidePopstar();
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
