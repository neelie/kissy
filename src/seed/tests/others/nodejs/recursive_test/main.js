var KISSY = require('../../../../../../build/kissy-nodejs').KISSY;

KISSY.config({
    packages:
        {
            mods: {
                base:__dirname.replace(/\\/g, "/")
            }
        }

});

KISSY.use("mods/start", function (S, r) {
    console.log(r);
});