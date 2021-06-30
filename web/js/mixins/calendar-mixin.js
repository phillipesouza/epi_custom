define([
    'jquery',
    'js/datepicker-pt-br'
], function($, datepickerPtBr) {
    'use strict';

    return function(Calendar){
        datepickerPtBr();

        return Calendar;
    }
});
