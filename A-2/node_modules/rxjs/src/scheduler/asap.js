System.register(['./AsapAction', './AsapScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsapAction_1, AsapScheduler_1;
    var asap;
    return {
        setters:[
            function (AsapAction_1_1) {
                AsapAction_1 = AsapAction_1_1;
            },
            function (AsapScheduler_1_1) {
                AsapScheduler_1 = AsapScheduler_1_1;
            }],
        execute: function() {
            exports_1("asap", asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction));
        }
    }
});
//# sourceMappingURL=asap.js.map