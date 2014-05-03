define(['angular',
    'javascripts/directives/deck',
    'javascripts/directives/card',
    'javascripts/directives/resize',
    'javascripts/directives/stopEventPropagation',
    'javascripts/directives/uplevel',
    'javascripts/directives/onEnter',
    'javascripts/directives/onEscape',
    'javascripts/directives/focusMe',
    'javascripts/directives/addComponent',
    'javascripts/directives/checklistItem',
    'javascripts/directives/cardActivity',
    'javascripts/directives/autoGrow'],
    function (angular, deck, card, resize, stopEvent, upLevel, onEnter, onEscape, focusMe, addComponent, checklistItem, cardActivity, autoGrow) {
        'use strict'

        angular.module('directives', [])
            .directive('deck', deck)
            .directive('card', card)
            .directive('resize', resize)
            .directive('stopEvent', stopEvent)
            .directive('uplevel', upLevel)
            .directive('onEnter', onEnter)
            .directive('onEscape', onEscape)
            .directive('focusMe', focusMe)
            .directive('addComponent', addComponent)
            .directive('checklistItem', checklistItem)
            .directive('cardActivity', cardActivity)
            .directive('autoGrow', autoGrow);
    });
