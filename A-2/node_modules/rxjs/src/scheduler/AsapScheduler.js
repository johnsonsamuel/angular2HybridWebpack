System.register(['./AsyncScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AsyncScheduler_1;
    var AsapScheduler;
    return {
        setters:[
            function (AsyncScheduler_1_1) {
                AsyncScheduler_1 = AsyncScheduler_1_1;
            }],
        execute: function() {
            AsapScheduler = (function (_super) {
                __extends(AsapScheduler, _super);
                function AsapScheduler() {
                    _super.apply(this, arguments);
                }
                AsapScheduler.prototype.flush = function () {
                    this.active = true;
                    this.scheduled = undefined;
                    var actions = this.actions;
                    var error;
                    var index = -1;
                    var count = actions.length;
                    var action = actions.shift();
                    do {
                        if (error = action.execute(action.state, action.delay)) {
                            break;
                        }
                    } while (++index < count && (action = actions.shift()));
                    this.active = false;
                    if (error) {
                        while (++index < count && (action = actions.shift())) {
                            action.unsubscribe();
                        }
                        throw error;
                    }
                };
                return AsapScheduler;
            }(AsyncScheduler_1.AsyncScheduler));
            exports_1("AsapScheduler", AsapScheduler);
        }
    }
});
//# sourceMappingURL=AsapScheduler.js.map