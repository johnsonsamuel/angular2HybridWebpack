System.register(['./Subject', './Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, Subscription_1;
    var AsyncSubject;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * @class AsyncSubject<T>
             */
            AsyncSubject = (function (_super) {
                __extends(AsyncSubject, _super);
                function AsyncSubject() {
                    _super.apply(this, arguments);
                    this.value = null;
                    this.hasNext = false;
                    this.hasCompleted = false;
                }
                AsyncSubject.prototype._subscribe = function (subscriber) {
                    if (this.hasCompleted && this.hasNext) {
                        subscriber.next(this.value);
                        subscriber.complete();
                        return Subscription_1.Subscription.EMPTY;
                    }
                    else if (this.hasError) {
                        subscriber.error(this.thrownError);
                        return Subscription_1.Subscription.EMPTY;
                    }
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                AsyncSubject.prototype.next = function (value) {
                    if (!this.hasCompleted) {
                        this.value = value;
                        this.hasNext = true;
                    }
                };
                AsyncSubject.prototype.complete = function () {
                    this.hasCompleted = true;
                    if (this.hasNext) {
                        _super.prototype.next.call(this, this.value);
                    }
                    _super.prototype.complete.call(this);
                };
                return AsyncSubject;
            }(Subject_1.Subject));
            exports_1("AsyncSubject", AsyncSubject);
        }
    }
});
//# sourceMappingURL=AsyncSubject.js.map