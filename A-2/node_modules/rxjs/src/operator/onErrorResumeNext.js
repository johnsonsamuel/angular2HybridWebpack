System.register(['../observable/FromObservable', '../util/isArray', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FromObservable_1, isArray_1, OuterSubscriber_1, subscribeToResult_1;
    var OnErrorResumeNextOperator, OnErrorResumeNextSubscriber;
    function onErrorResumeNext() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i - 0] = arguments[_i];
        }
        if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
            nextSources = nextSources[0];
        }
        return this.lift(new OnErrorResumeNextOperator(nextSources));
    }
    exports_1("onErrorResumeNext", onErrorResumeNext);
    /* tslint:enable:max-line-length */
    function onErrorResumeNextStatic() {
        var nextSources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nextSources[_i - 0] = arguments[_i];
        }
        var source = null;
        if (nextSources.length === 1 && isArray_1.isArray(nextSources[0])) {
            nextSources = nextSources[0];
        }
        source = nextSources.shift();
        return new FromObservable_1.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
    }
    exports_1("onErrorResumeNextStatic", onErrorResumeNextStatic);
    return {
        setters:[
            function (FromObservable_1_1) {
                FromObservable_1 = FromObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            OnErrorResumeNextOperator = (function () {
                function OnErrorResumeNextOperator(nextSources) {
                    this.nextSources = nextSources;
                }
                OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
                };
                return OnErrorResumeNextOperator;
            }());
            OnErrorResumeNextSubscriber = (function (_super) {
                __extends(OnErrorResumeNextSubscriber, _super);
                function OnErrorResumeNextSubscriber(destination, nextSources) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.nextSources = nextSources;
                }
                OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
                    this.subscribeToNextSource();
                };
                OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.subscribeToNextSource();
                };
                OnErrorResumeNextSubscriber.prototype._error = function (err) {
                    this.subscribeToNextSource();
                };
                OnErrorResumeNextSubscriber.prototype._complete = function () {
                    this.subscribeToNextSource();
                };
                OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
                    var next = this.nextSources.shift();
                    if (next) {
                        this.add(subscribeToResult_1.subscribeToResult(this, next));
                    }
                    else {
                        this.destination.complete();
                    }
                };
                return OnErrorResumeNextSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});
//# sourceMappingURL=onErrorResumeNext.js.map