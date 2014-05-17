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
                    popstarMinHeight: '@',
                    popstarAlign: '@',
                    popstarTitle: '@',
                    popstarClass: '@'
                },
                link: function (scope, element, attrs) {
                    //defaults
                    var defaultTarget = 'target';
                    var defaultPopstar = 'popstar';
                    var defaultMatchTarget = 'false';
                    var defaultMaxWidth = 270;
                    var defaultMinHeight = 52;
                    var defaultAlign = 'left';

                    // scope variables
                    scope.toggle = false;
                    scope.showTitle = true;
                    scope.hasTitle = true;
                    scope.fixedDisplay = 'none';
                    scope.fixedTop = 0;
                    scope.fixedLeft = 0;
                    scope.fixedWidth = 0;
                    scope.fixedHeight = 0;
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

                    if (typeof scope.popstarMinHeight === 'undefined') {
                        scope.popstarMinHeight = defaultMinHeight;
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
                    var targetHeight = target[0].offsetHeight;
                    var targetWidth = target[0].offsetWidth;
                    var targetLeft = target[0].offsetLeft;
                    var targetTop = target[0].offsetTop;

                    // handle width
                    scope.fixedWidth = scope.popstarMaxWidth;

                    // handle height
                    scope.fixedHeight = scope.popstarMinHeight;

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

                },
                controller: function ($scope) {

                    $scope.isHovered = false;

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
                        console.log("bluring.." + $scope.popstarId);
                        hidePopstar();
                    }

                    $scope.handleFocus = function () {
                        console.log("focusing.." + $scope.popstarId);
                    }

                    $scope.handleHover = function () {
                        //console.log("hovering over.." + $scope.popstarId);
                        $scope.isHovered = true;
                    }

                    $scope.handleHoverOff = function(){
                        //console.log("leaving.." + $scope.popstarId);
                        $scope.isHovered = false;
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
