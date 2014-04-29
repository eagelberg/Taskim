define(['angular',
    'javascripts/directives/deck',
    'javascripts/directives/card',
    'javascripts/directives/resize',
    'javascripts/directives/stopEventPropagation',
    'javascripts/directives/uplevel',
    'javascripts/directives/onEnter',
    'javascripts/directives/onEscape',
    'javascripts/directives/xngFocus'],
    function (angular, deck, card, resize, stopEvent, upLevel,onEnter,onEscape,xngFocus) {
        'use strict'

        angular.module('directives', [])
            .directive('deck', deck)
            .directive('card', card)
            .directive('resize', resize)
            .directive('stopEvent', stopEvent)
            .directive('uplevel', upLevel)
            .directive('onEnter', onEnter)
            .directive('onEscape', onEscape)
            .directive('xngFocus', xngFocus);
    });
