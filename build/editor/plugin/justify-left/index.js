﻿/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Oct 26 01:55
*/
/**
 * justifyLeft button.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/justify-left/index", function (S, Editor, justifyCenterCmd) {
    function exec() {
        var editor = this.get("editor");
        editor.execCommand("justifyLeft");
        editor.focus();
    }

    function justifyLeft() {
    }

    S.augment(justifyLeft, {
        renderUI:function (editor) {
            justifyCenterCmd.init(editor);

            editor.addButton("justifyLeft", {
                tooltip:"左对齐",
                checkable:true,
                listeners:{
                    click:exec,
                    afterSyncUI:function () {
                        var self = this;
                        editor.on("selectionChange", function () {
                            if (editor.get("mode") == Editor.SOURCE_MODE) {
                                return;
                            }
                            if (editor.queryCommandValue("justifyLeft")) {
                                self.set("checked", true);
                            } else {
                                self.set("checked", false);
                            }
                        });
                    }
                },
                mode:Editor.WYSIWYG_MODE
            });

            editor.docReady(function () {
                editor.get("document").on("keydown", function (e) {
                    if (e.ctrlKey && e.keyCode == S.Node.KeyCodes.L) {
                        editor.execCommand("justifyLeft");
                        e.preventDefault();
                    }
                });
            });
        }
    });

    return justifyLeft;
}, {
    requires:['editor', './cmd']
});
