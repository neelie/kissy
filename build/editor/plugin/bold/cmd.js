﻿/*
Copyright 2012, KISSY UI Library v1.40dev
MIT Licensed
build time: Oct 26 01:55
*/
/**
 * bold command.
 * @author yiminghe@gmail.com
 */
KISSY.add("editor/plugin/bold/cmd", function (S, Editor, Cmd) {
    var BOLD_STYLE = new Editor.Style({
        element:'strong',
        overrides:[
            {
                element:'b'
            },
            {
                element:'span',
                attributes:{
                    style:'font-weight: bold;'
                }
            }
        ]
    });
    return {
        init:function (editor) {
            Cmd.addButtonCmd(editor, "bold", BOLD_STYLE);
        }
    }
}, {
    requires:['editor', '../font/cmd']
});
