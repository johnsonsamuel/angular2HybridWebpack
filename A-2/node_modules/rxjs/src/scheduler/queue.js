System.register(['./QueueAction', './QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueueAction_1, QueueScheduler_1;
    var queue;
    return {
        setters:[
            function (QueueAction_1_1) {
                QueueAction_1 = QueueAction_1_1;
            },
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            exports_1("queue", queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction));
        }
    }
});
//# sourceMappingURL=queue.js.map