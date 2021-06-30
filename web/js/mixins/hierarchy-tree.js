define([
    'jquery',
    'mage/translate'
], function($) {
    'use strict';

    return function(HierarchyTree){
        $.widget('mage.hierarchyTree', HierarchyTree, {

            _checkSelectedNode: function (e) {
                var treeParams = this._getTreeParams();

                e.preventDefault();

                if (!treeParams.selectedNode) {
                    this._openAlert({
                        title: $.mage.__('Please select user or team'),
                        content: $.mage.__('Please select a user or team first.')
                    });

                    return false;
                }

                treeParams.isParent ? this._editSelf(e, treeParams) : this._defineSelectedType(e, treeParams);
                this._setIdFields();
            }
        })

        return $.mage.hierarchyTree;
    }
});
