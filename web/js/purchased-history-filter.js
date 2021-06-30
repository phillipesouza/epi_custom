define([
    'jquery',
    'mage/translate',
    'mage/calendar',
    'custom-mask'
], function($, $t) {
    'use strict';

    return function(){
        $('#from-filter, #at-filter').calendar({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            currentText: $t('Go Today'),
            closeText: $t('Close'),
            showWeek: true
        });

        $("#period-filter").on("change", function(e){
            var value = e.target.value

            if(value == 'fa') {
                $(".filter-option.period .control.fromat").addClass("show")
            } else {
                $(".filter-option.period .control.fromat").removeClass("show")
            }
        })

        $(".field button").on("click", function(e){
            $(this).siblings("input").focus();
        })

        $("#filter-cnpj-text").mask("00.000.000/0000-00");
    }
});
