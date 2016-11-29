System.register(['../../Observable', '../../operator/onErrorResumeNext'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, onErrorResumeNext_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (onErrorResumeNext_1_1) {
                onErrorResumeNext_1 = onErrorResumeNext_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
        }
    }
});
//# sourceMappingURL=onErrorResumeNext.js.map