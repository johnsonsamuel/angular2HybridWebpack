"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FooterChildComponent = (function () {
    function FooterChildComponent() {
        this.footerChildTitle = 'hola';
        this.notify = new core_1.EventEmitter();
        this.notifyMouseEvent = new core_1.EventEmitter();
    }
    FooterChildComponent.prototype.onClick = function () {
        this.notify.emit('Clicked child comp ' + this.footerChildTitle);
    };
    FooterChildComponent.prototype.onMouseOver = function () {
        this.notifyMouseEvent.emit('Mouse over event from child component' + this.footerChildTitle);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FooterChildComponent.prototype, "footerChildTitle", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FooterChildComponent.prototype, "notify", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FooterChildComponent.prototype, "notifyMouseEvent", void 0);
    FooterChildComponent = __decorate([
        core_1.Component({
            selector: 'footer-child',
            template: "<h4>{{footerChildTitle}} \n        <hr>\n        <span (click)=\"onClick()\">Click</span>\n        <hr>\n        <div (mouseover)=\"onMouseOver()\">Mouse over me</div></h4>"
        }), 
        __metadata('design:paramtypes', [])
    ], FooterChildComponent);
    return FooterChildComponent;
}());
exports.FooterChildComponent = FooterChildComponent;
//# sourceMappingURL=footer-child-component.js.map