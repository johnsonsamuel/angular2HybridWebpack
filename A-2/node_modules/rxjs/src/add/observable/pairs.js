System.register(['../../Observable', '../../observable/pairs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, pairs_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (pairs_1_1) {
                pairs_1 = pairs_1_1;
            }],
        execute: function() {
            Observable_1.Observable.pairs = pairs_1.pairs;
        }
    }
});
//# sourceMappingURL=pairs.js.map