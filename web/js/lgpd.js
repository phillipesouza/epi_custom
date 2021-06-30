define([
    'jquery',
    'jquery/jquery-storageapi'
], function($) {
    'use strict';
    console.log('hello');
    return function(){
        var storage = $.initNamespaceStorage('mage-lgpd-storage').localStorage;

        //storage.set('lgpd-is-acepted', false);

        if(!storage.get('lgpd-is-acepted')){
            $('.lgpd').slideDown(300);
            $("#accept-lgpd").on('click', function(){
                storage.set('lgpd-is-acepted', true);
                $('.lgpd').slideUp(200);
            });
        }
    }
});
