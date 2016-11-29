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
var LoginFormComponent = (function () {
    function LoginFormComponent() {
    }
    LoginFormComponent.prototype.onSubmit = function (f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
        console.log(f.value.last); // false
    };
    LoginFormComponent.prototype.subscribeUser = function (subscribeForm) {
        console.log(subscribeForm.value);
        console.log(subscribeForm.valid);
        console.log(subscribeForm.valid);
    };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'login-page',
            templateUrl: 'app/forms/login.form.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login.form.component.js.map