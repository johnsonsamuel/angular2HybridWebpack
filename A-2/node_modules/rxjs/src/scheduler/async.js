System.register(['./AsyncAction', './AsyncScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AsyncAction_1, AsyncScheduler_1;
    var async;
    return {
        setters:[
            function (AsyncAction_1_1) {
                AsyncAction_1 = AsyncAction_1_1;
            },
            function (AsyncScheduler_1_1) {
                AsyncScheduler_1 = AsyncScheduler_1_1;
            }],
        execute: function() {
            exports_1("async", async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction));
        }
    }
});
//# sourceMappingURL=async.js.map