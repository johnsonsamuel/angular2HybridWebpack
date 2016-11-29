System.register(['./AnimationFrameAction', './AnimationFrameScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnimationFrameAction_1, AnimationFrameScheduler_1;
    var animationFrame;
    return {
        setters:[
            function (AnimationFrameAction_1_1) {
                AnimationFrameAction_1 = AnimationFrameAction_1_1;
            },
            function (AnimationFrameScheduler_1_1) {
                AnimationFrameScheduler_1 = AnimationFrameScheduler_1_1;
            }],
        execute: function() {
            exports_1("animationFrame", animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction));
        }
    }
});
//# sourceMappingURL=animationFrame.js.map