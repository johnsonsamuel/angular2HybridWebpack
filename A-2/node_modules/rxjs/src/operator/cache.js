System.register(['../Observable', '../ReplaySubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, ReplaySubject_1;
    /**
     * @param bufferSize
     * @param windowTime
     * @param scheduler
     * @return {Observable<any>}
     * @method cache
     * @owner Observable
     */
    function cache(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        var subject;
        var source = this;
        var refs = 0;
        var outerSub;
        var getSubject = function () {
            subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
            return subject;
        };
        return new Observable_1.Observable(function (observer) {
            if (!subject) {
                subject = getSubject();
                outerSub = source.subscribe(function (value) { return subject.next(value); }, function (err) {
                    var s = subject;
                    subject = null;
                    s.error(err);
                }, function () { return subject.complete(); });
            }
            refs++;
            if (!subject) {
                subject = getSubject();
            }
            var innerSub = subject.subscribe(observer);
            return function () {
                refs--;
                if (innerSub) {
                    innerSub.unsubscribe();
                }
                if (refs === 0) {
                    outerSub.unsubscribe();
                }
            };
        });
    }
    exports_1("cache", cache);
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=cache.js.map