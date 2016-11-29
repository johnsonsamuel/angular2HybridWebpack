"use strict";
var footer_component_1 = require('./footer/footer-component');
var footer_service_1 = require('./footer/footer-service');
var login_form_component_1 = require('./forms/login.form.component');
var upgrade_1 = require('@angular/upgrade');
var app_component_1 = require('./app.component');
var app_module_1 = require('./app.module');
var adapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
angular.module('app').directive('appComponent', adapter.downgradeNg2Component(app_component_1.AppComponent));
angular.module('app').directive('footerComponent', adapter.downgradeNg2Component(footer_component_1.FooterComponent));
angular.module('app').directive('loginPage', adapter.downgradeNg2Component(login_form_component_1.LoginFormComponent));
//service
angular.module('app')
    .factory('FooterService', adapter.downgradeNg2Provider(footer_service_1.FooterService));
adapter.bootstrap(document.body, ['app']);
//# sourceMappingURL=main.js.map