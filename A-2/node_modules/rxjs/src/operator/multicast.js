System.register(['../observable/MulticastObservable', '../observable/ConnectableObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MulticastObservable_1, ConnectableObservable_1;
    /**
     * Returns an Observable that emits the results of invoking a specified selector on items
     * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
     *
     * <img src="./img/multicast.png" width="100%">
     *
     * @param {Function|Subject} Factory function to create an intermediate subject through
     * which the source sequence's elements will be multicast to the selector function
     * or Subject to push source elements into.
     * @param {Function} Optional selector function that can use the multicasted source stream
     * as many times as needed, without causing multiple subscriptions to the source stream.
     * Subscribers to the given source will receive all notifications of the source from the
     * time of the subscription forward.
     * @return {Observable} an Observable that emits the results of invoking the selector
     * on the items emitted by a `ConnectableObservable` that shares a single subscription to
     * the underlying stream.
     * @method multicast
     * @owner Observable
     */
    function multicast(subjectOrSubjectFactory, selector) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') {
            subjectFactory = subjectOrSubjectFactory;
        }
        else {
            subjectFactory = function subjectFactory() {
                return subjectOrSubjectFactory;
            };
        }
        return !selector ?
            new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) :
            new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
    }
    exports_1("multicast", multicast);
    return {
        setters:[
            function (MulticastObservable_1_1) {
                MulticastObservable_1 = MulticastObservable_1_1;
            },
            function (ConnectableObservable_1_1) {
                ConnectableObservable_1 = ConnectableObservable_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=multicast.js.map