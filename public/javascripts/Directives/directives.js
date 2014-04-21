define(['angular',
        'javascripts/directives/deck',
        'javascripts/directives/card',
        'javascripts/directives/resize',
        'javascripts/directives/stopEventPropagation',
        'javascripts/directives/uplevel'],
    function(angular, deck, card, resize, stopEvent, upLevel) {
    'use strict'

    angular.module('directives',[])
        .directive('deck', deck)
        .directive('card', card)
        .directive('resize', resize)
        .directive('stopEvent', stopEvent)
        .directive('uplevel', upLevel);
    });