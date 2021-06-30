define([
    'jquery',
    'matchMedia',
    'collapsible'
], function($, matchMedia){
    "use strict";

    return function(){

        var seletor = ".accordions > div:not(.inst)";

        $(seletor).collapsible({
            header: "h3",
            content: ".content",
            active: true,
            animate: {
                duration: 150
             }
        })

        matchMedia({
            media: '(max-width: 768px)',
            entry: function(){
                $(seletor).collapsible('option', 'collapsible', true)
                $(seletor).collapsible('deactivate')
            },
            exit: function(){
                $(seletor).collapsible('activate')
                $(seletor).collapsible('option', 'collapsible', false)
            }
        })
    }
})
