define([
    'jquery',
    'matchMedia',
    'slick'
], function ($, checkMedia) {
    "use strict";

    return function (config, elem) {
        if (config.onlymobile == true) {
            let selectMedia = '(min-width: ' + config.widthMax + 'px)'
            checkMedia({
                media: selectMedia,
                entry: function () {
                    if ($(elem).hasClass('slick-initialized')) {
                        $(elem).slick("unslick");
                    }
                },
                exit: function () {
                    $(elem).slick(config.slick);
                }
            })
        } else {
            $(elem).slick(config.slick);
        }
    }
});
