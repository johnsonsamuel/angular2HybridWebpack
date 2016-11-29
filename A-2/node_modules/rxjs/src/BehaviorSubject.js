System.register(['./Subject', './util/ObjectUnsubscribedError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, ObjectUnsubscribedError_1;
    var BehaviorSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (ObjectUnsubscribedError_1_1) {
                ObjectUnsubscribedError_1 = ObjectUnsubscribedError_1_1;
            }],
        execute: function() {
            /**
             * @class BehaviorSubject<T>
             */
            BehaviorSubject = (function (_super) {
                __extends(BehaviorSubject, _super);
                function BehaviorSubject(_value) {
                    _super.call(this);
                    this._value = _value;
                }
                Object.defineProperty(BehaviorSubject.prototype, "value", {
                    get: function () {
                        return this.getValue();
                    },
                    enumerable: true,
                    configurable: true
                });
                BehaviorSubject.prototype._subscribe = function (subscriber) {
                    var subscription = _super.prototype._subscribe.call(this, subscriber);
                    if (subscription && !subscription.closed) {
                        subscriber.next(this._value);
                    }
                    return subscription;
                };
                BehaviorSubject.prototype.getValue = function () {
                    if (this.hasError) {
                        throw this.thrownError;
                    }
                    else if (this.closed) {
                        throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
                    }
                    else {
                        return this._value;
                    }
                };
                BehaviorSubject.prototype.next = function (value) {
                    _super.prototype.next.call(this, this._value = value);
                };
                return BehaviorSubject;
            }(Subject_1.Subject));
            exports_1("BehaviorSubject", BehaviorSubject);
        }
    }
});
//# sourceMappingURL=BehaviorSubject.js.map