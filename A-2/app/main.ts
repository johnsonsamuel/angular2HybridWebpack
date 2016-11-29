
import {FooterComponent} from './footer/footer-component'
import {FooterService} from './footer/footer-service';
import {LoginFormComponent} from './forms/login.form.component';
import {UpgradeAdapter} from '@angular/upgrade';
import {AppComponent} from './app.component';
import {AppModule} from  './app.module';
declare var angular:any;



var adapter = new UpgradeAdapter( AppModule );


angular.module('app').directive('appComponent', adapter.downgradeNg2Component(AppComponent));
angular.module('app').directive('footerComponent', adapter.downgradeNg2Component(FooterComponent));
angular.module('app').directive('loginPage', adapter.downgradeNg2Component(LoginFormComponent));


//service
angular.module('app')
    .factory('FooterService', adapter.downgradeNg2Provider(FooterService));


adapter.bootstrap(document.body, ['app']);




