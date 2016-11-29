import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FooterComponent } from './footer/footer-component';
import { FooterService } from './footer/footer-service';
import {FormsModule} from '@angular/forms';
import { FooterInputComponent} from './footer/footer-input-component';
import { FooterChildComponent } from './footer/footer-child-component';
import { ParentComponent } from './databinding/parent.component';
import { ChildComponent } from './databinding/child.component';
import { UserInfoComponent } from './outputbinding/user.info.component';
import { LoginFormComponent } from './forms/login.form.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, FooterComponent, FooterInputComponent, FooterChildComponent, ParentComponent,
                    ChildComponent, UserInfoComponent, LoginFormComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ FooterService ]
})
export class AppModule { }

