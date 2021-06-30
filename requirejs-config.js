var config = {
    map: {
        "*": {
            "focus-element": "js/libs/focus-element",
            "slick-template": "js/libs/slick-template",
            "custom-mask": "js/third-party/jquery.mask.min"
        }
    },
    config: {
        mixins: {
            "Magento_Company/js/hierarchy-tree": {
                "js/mixins/hierarchy-tree": true
            },
            "mage/calendar": {
                "js/mixins/calendar-mixin": true
            }
        }
    }
}
