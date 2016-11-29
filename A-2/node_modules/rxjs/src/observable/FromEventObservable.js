System.register(['../Observable', '../util/tryCatch', '../util/isFunction', '../util/errorObject', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, tryCatch_1, isFunction_1, errorObject_1, Subscription_1;
    var FromEventObservable;
    function isNodeStyleEventEmmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
    }
    function isJQueryStyleEventEmitter(sourceObj) {
        return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
    }
    function isNodeList(sourceObj) {
        return !!sourceObj && sourceObj.toString() === '[object NodeList]';
    }
    function isHTMLCollection(sourceObj) {
        return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
    }
    function isEventTarget(sourceObj) {
        return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
    }
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromEventObservable = (function (_super) {
                __extends(FromEventObservable, _super);
                function FromEventObservable(sourceObj, eventName, selector, options) {
                    _super.call(this);
                    this.sourceObj = sourceObj;
                    this.eventName = eventName;
                    this.selector = selector;
                    this.options = options;
                }
                /* tslint:enable:max-line-length */
                /**
                 * Creates an Observable that emits events of a specific type coming from the
                 * given event target.
                 *
                 * <span class="informal">Creates an Observable from DOM events, or Node
                 * EventEmitter events or others.</span>
                 *
                 * <img src="./img/fromEvent.png" width="100%">
                 *
                 * Creates an Observable by attaching an event listener to an "event target",
                 * which may be an object with `addEventListener` and `removeEventListener`,
                 * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
                 * DOM, or an HTMLCollection from the DOM. The event handler is attached when
                 * the output Observable is subscribed, and removed when the Subscription is
                 * unsubscribed.
                 *
                 * @example <caption>Emits clicks happening on the DOM document</caption>
                 * var clicks = Rx.Observable.fromEvent(document, 'click');
                 * clicks.subscribe(x => console.log(x));
                 *
                 * @see {@link from}
                 * @see {@link fromEventPattern}
                 *
                 * @param {EventTargetLike} target The DOMElement, event target, Node.js
                 * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
                 * @param {string} eventName The event name of interest, being emitted by the
                 * `target`.
                 * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
                 * @param {SelectorMethodSignature<T>} [selector] An optional function to
                 * post-process results. It takes the arguments from the event handler and
                 * should return a single value.
                 * @return {Observable<T>}
                 * @static true
                 * @name fromEvent
                 * @owner Observable
                 */
                FromEventObservable.create = function (target, eventName, options, selector) {
                    if (isFunction_1.isFunction(options)) {
                        selector = options;
                        options = undefined;
                    }
                    return new FromEventObservable(target, eventName, selector, options);
                };
                FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
                    var unsubscribe;
                    if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
                        for (var i = 0, len = sourceObj.length; i < len; i++) {
                            FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
                        }
                    }
                    else if (isEventTarget(sourceObj)) {
                        var source_1 = sourceObj;
                        sourceObj.addEventListener(eventName, handler, options);
                        unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
                    }
                    else if (isJQueryStyleEventEmitter(sourceObj)) {
                        var source_2 = sourceObj;
                        sourceObj.on(eventName, handler);
                        unsubscribe = function () { return source_2.off(eventName, handler); };
                    }
                    else if (isNodeStyleEventEmmitter(sourceObj)) {
                        var source_3 = sourceObj;
                        sourceObj.addListener(eventName, handler);
                        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
                    }
                    subscriber.add(new Subscription_1.Subscription(unsubscribe));
                };
                FromEventObservable.prototype._subscribe = function (subscriber) {
                    var sourceObj = this.sourceObj;
                    var eventName = this.eventName;
                    var options = this.options;
                    var selector = this.selector;
                    var handler = selector ? function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
                        if (result === errorObject_1.errorObject) {
                            subscriber.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subscriber.next(result);
                        }
                    } : function (e) { return subscriber.next(e); };
                    FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
                };
                return FromEventObservable;
            }(Observable_1.Observable));
            exports_1("FromEventObservable", FromEventObservable);
        }
    }
});
//# sourceMappingURL=FromEventObservable.js.map