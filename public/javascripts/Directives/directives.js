define(['angular',
    'javascripts/directives/deck',
    'javascripts/directives/card/card',
    'javascripts/directives/ui/resize',
    'javascripts/directives/stopEventPropagation',
    'javascripts/directives/uplevel',
    'javascripts/directives/ui/onEnter',
    'javascripts/directives/ui/onEscape',
    'javascripts/directives/ui/focusMe',
    'javascripts/directives/addComponent',
    'javascripts/directives/ui/autoGrow',
    'javascripts/directives/card/cardDescriptionSection',
    'javascripts/directives/card/cardLabelSection',
    'javascripts/directives/card/cardChecklistSection',
    'javascripts/directives/card/checklistItem',
    'javascripts/directives/card/cardActivitySection',
    'javascripts/directives/card/cardActionSection',
    'javascripts/directives/card/cardActivity',
    'javascripts/directives/searchBar',
    'javascripts/directives/sidebar',
    'javascripts/directives/member',
    'javascripts/directives/ui/popstar'],
    function (angular, deck, card, resize, stopEvent, upLevel, onEnter, onEscape, focusMe, addComponent, autoGrow, cardDescriptionSection,
              cardLabelSection, cardChecklistSection, checklistItem, cardActivitySection, cardActionSection, cardActivity, searchBar,sidebar,
              member,popstar) {
        'use strict'

        angular.module('directives', [])
            .directive('deck', deck)
            .directive('card', card)
            .directive('resize', resize)
            .directive('stopEvent', stopEvent)
            .directive('uplevel', upLevel)
            .directive('onEnter', onEnter)
            .directive('onEscape', onEscape)
            .directive('autoGrow', autoGrow)
            .directive('focusMe', focusMe)
            .directive('addComponent', addComponent)
            .directive('cardDescriptionSection', cardDescriptionSection)
            .directive('cardLabelSection', cardLabelSection)
            .directive('cardChecklistSection', cardChecklistSection)
            .directive('checklistItem', checklistItem)
            .directive('cardActivitySection', cardActivitySection)
            .directive('cardActionSection', cardActionSection)
            .directive('cardActivity', cardActivity)
            .directive('searchBar', searchBar)
            .directive('sidebar', sidebar)
            .directive('member', member)
            .directive('popstar', popstar)

    });
