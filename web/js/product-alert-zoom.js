define([
    'jquery',
    'matchMedia',
    'mage/template'
], function($, mediaCheck, template) {
    'use strict';

    return function(){
        mediaCheck({
            media: '(max-width: 768px)',
            entry: function(){
                var message = template("#zoom-message-template");
                message = message();

                $(".product.media").append(message);
                setTimeout(function(){
                    $("#zoom-message-content").fadeOut(1000)
                }, 2000)
            },
            exit: function(){
                if($("#zoom-message-content").length) {
                    $("#zoom-message-content").remove();
                }
            }
        })
    }
});
