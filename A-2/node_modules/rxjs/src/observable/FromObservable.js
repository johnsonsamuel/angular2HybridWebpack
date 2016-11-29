System.register(['../util/isArray', '../util/isPromise', './PromiseObservable', './IteratorObservable', './ArrayObservable', './ArrayLikeObservable', '../symbol/iterator', '../Observable', '../operator/observeOn', '../symbol/observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isArray_1, isPromise_1, PromiseObservable_1, IteratorObservable_1, ArrayObservable_1, ArrayLikeObservable_1, iterator_1, Observable_1, observeOn_1, observable_1;
    var isArrayLike, FromObservable;
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isPromise_1_1) {
                isPromise_1 = isPromise_1_1;
            },
            function (PromiseObservable_1_1) {
                PromiseObservable_1 = PromiseObservable_1_1;
            },
            function (IteratorObservable_1_1) {
                IteratorObservable_1 = IteratorObservable_1_1;
            },
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (ArrayLikeObservable_1_1) {
                ArrayLikeObservable_1 = ArrayLikeObservable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            }],
        execute: function() {
            isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromObservable = (function (_super) {
                __extends(FromObservable, _super);
                function FromObservable(ish, scheduler) {
                    _super.call(this, null);
                    this.ish = ish;
                    this.scheduler = scheduler;
                }
                /**
                 * Creates an Observable from an Array, an array-like object, a Promise, an
                 * iterable object, or an Observable-like object.
                 *
                 * <span class="informal">Converts almost anything to an Observable.</span>
                 *
                 * <img src="./img/from.png" width="100%">
                 *
                 * Convert various other objects and data types into Observables. `from`
                 * converts a Promise or an array-like or an
                 * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
                 * object into an Observable that emits the items in that promise or array or
                 * iterable. A String, in this context, is treated as an array of characters.
                 * Observable-like objects (contains a function named with the ES2015 Symbol
                 * for Observable) can also be converted through this operator.
                 *
                 * @example <caption>Converts an array to an Observable</caption>
                 * var array = [10, 20, 30];
                 * var result = Rx.Observable.from(array);
                 * result.subscribe(x => console.log(x));
                 *
                 * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
                 * function* generateDoubles(seed) {
                 *   var i = seed;
                 *   while (true) {
                 *     yield i;
                 *     i = 2 * i; // double it
                 *   }
                 * }
                 *
                 * var iterator = generateDoubles(3);
                 * var result = Rx.Observable.from(iterator).take(10);
                 * result.subscribe(x => console.log(x));
                 *
                 * @see {@link create}
                 * @see {@link fromEvent}
                 * @see {@link fromEventPattern}
                 * @see {@link fromPromise}
                 *
                 * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
                 * Observable-like, an Array, an iterable or an array-like object to be
                 * converted.
                 * @param {Scheduler} [scheduler] The scheduler on which to schedule the
                 * emissions of values.
                 * @return {Observable<T>} The Observable whose values are originally from the
                 * input object that was converted.
                 * @static true
                 * @name from
                 * @owner Observable
                 */
                FromObservable.create = function (ish, scheduler) {
                    if (ish != null) {
                        if (typeof ish[observable_1.$$observable] === 'function') {
                            if (ish instanceof Observable_1.Observable && !scheduler) {
                                return ish;
                            }
                            return new FromObservable(ish, scheduler);
                        }
                        else if (isArray_1.isArray(ish)) {
                            return new ArrayObservable_1.ArrayObservable(ish, scheduler);
                        }
                        else if (isPromise_1.isPromise(ish)) {
                            return new PromiseObservable_1.PromiseObservable(ish, scheduler);
                        }
                        else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
                            return new IteratorObservable_1.IteratorObservable(ish, scheduler);
                        }
                        else if (isArrayLike(ish)) {
                            return new ArrayLikeObservable_1.ArrayLikeObservable(ish, scheduler);
                        }
                    }
                    throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
                };
                FromObservable.prototype._subscribe = function (subscriber) {
                    var ish = this.ish;
                    var scheduler = this.scheduler;
                    if (scheduler == null) {
                        return ish[observable_1.$$observable]().subscribe(subscriber);
                    }
                    else {
                        return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
                    }
                };
                return FromObservable;
            }(Observable_1.Observable));
            exports_1("FromObservable", FromObservable);
        }
    }
});
//# sourceMappingURL=FromObservable.js.map