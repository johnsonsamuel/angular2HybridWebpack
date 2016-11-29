System.register(['../../Observable', '../../observable/GenerateObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, GenerateObservable_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (GenerateObservable_1_1) {
                GenerateObservable_1 = GenerateObservable_1_1;
            }],
        execute: function() {
            Observable_1.Observable.generate = GenerateObservable_1.GenerateObservable.create;
        }
    }
});
//# sourceMappingURL=generate.js.map