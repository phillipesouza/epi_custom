define([
    "jquery",
    "matchMedia"
], function ($, matchMedia) {
    "use strict";

    return function(conf, elem){

        var cssTransition = conf.transition/1000;
        cssTransition = cssTransition.toString() + "s";

        let focusElement = {
            element: null,
            otherElements: [],

            initialize: function () {
                if (!$(".blackBackground").length) {
                $(".page-wrapper").append("<div class='blackBackground'></div>");
                $(".blackBackground").css({
                    "position": "fixed",
                    "width": "100%",
                    "height": "100%",
                    "background-color": "rgb(114, 114, 114)",
                    "top": "0",
                    "left": "0",
                    "display": "none",
                    "z-index": "5"
                });
                }
            },

            open: function (el, pos, moveToElement = false) {
                if (!this.element) {
                    this.element = el;

                    if(moveToElement) {
                        this.moveTo(moveToElement);
                    }

                    var elements = this.element.split(",");
                    var zindex = 1000;

                    elements.forEach(function(elem, index){
                        if (pos) {
                            $(elem).css({
                                "position": pos,
                                "z-index": zindex.toString()
                            });
                        } else {
                            $(elem).css({
                                "z-index": zindex.toString()
                            });
                        }
                        zindex--;
                    })

                    $(".blackBackground").stop().fadeTo(conf.transition, 0.8);
                }
            },

            close: function (pos) {
                if (this.element) {
                    var position = "inherit";

                    if (pos) {
                        position = pos;
                    }

                    $(".blackBackground").stop().fadeOut(conf.transition);

                    this.oldElement = this.element;

                    var $this = this;

                    setTimeout(function(){
                        var canClose = true;
                        if($this.element){
                            canClose = false;
                        }
                        if(canClose){
                            $($this.oldElement).attr("style","");
                            $this.moveTo('.page-wrapper');
                        }
                    }, conf.transition)

                    this.element = null;
                }
            },

            moveTo: function(elem){
                var blackBackground = $('.blackBackground');
                $('.blackBackground').remove();
                $(elem).append(blackBackground);
            }
        };

        focusElement.initialize();

        function createEvents(){
            //Open
            conf.events.open.forEach(function(event){
                $('body').on(event.event, event.trigger, function(){
                    focusElement.open(event.elem, event.pos, conf.moveToElement)
                })
            })

            //Close
            conf.events.close.forEach(function(event){
                $('body').on(event.event, event.trigger, function(){
                    focusElement.close(event.pos)
                })
            })
        }

        function destroyEvents(){
            //Open
            conf.events.open.forEach(function(event){
                $(event.trigger).off(event.event)
            })

            //Close
            conf.events.close.forEach(function(event){
                $(event.trigger).off(event.event)
            })
        }

        createEvents();

        if(typeof conf.media === "object"){
            matchMedia({
                media: "(" + conf.media.type + "-width: " + conf.media.width + "px)",
                entry: function(){
                    createEvents();
                },

                exit: function(){
                    focusElement.close();
                    destroyEvents();
                }
            })
        }
    }
});
