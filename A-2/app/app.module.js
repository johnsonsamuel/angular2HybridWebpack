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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var footer_component_1 = require('./footer/footer-component');
var footer_service_1 = require('./footer/footer-service');
var forms_1 = require('@angular/forms');
var footer_input_component_1 = require('./footer/footer-input-component');
var footer_child_component_1 = require('./footer/footer-child-component');
var parent_component_1 = require('./databinding/parent.component');
var child_component_1 = require('./databinding/child.component');
var user_info_component_1 = require('./outputbinding/user.info.component');
var login_form_component_1 = require('./forms/login.form.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, footer_component_1.FooterComponent, footer_input_component_1.FooterInputComponent, footer_child_component_1.FooterChildComponent, parent_component_1.ParentComponent,
                child_component_1.ChildComponent, user_info_component_1.UserInfoComponent, login_form_component_1.LoginFormComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [footer_service_1.FooterService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map