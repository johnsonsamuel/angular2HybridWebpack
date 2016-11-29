System.register(['../Observable', '../observable/ConnectableObservable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, ConnectableObservable_1;
    var MulticastObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ConnectableObservable_1_1) {
                ConnectableObservable_1 = ConnectableObservable_1_1;
            }],
        execute: function() {
            MulticastObservable = (function (_super) {
                __extends(MulticastObservable, _super);
                function MulticastObservable(source, subjectFactory, selector) {
                    _super.call(this);
                    this.source = source;
                    this.subjectFactory = subjectFactory;
                    this.selector = selector;
                }
                MulticastObservable.prototype._subscribe = function (subscriber) {
                    var _a = this, selector = _a.selector, source = _a.source;
                    var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
                    var subscription = selector(connectable).subscribe(subscriber);
                    subscription.add(connectable.connect());
                    return subscription;
                };
                return MulticastObservable;
            }(Observable_1.Observable));
            exports_1("MulticastObservable", MulticastObservable);
        }
    }
});
//# sourceMappingURL=MulticastObservable.js.map