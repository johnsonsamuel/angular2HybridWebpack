import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'login-page',
    templateUrl: 'app/forms/login.form.html'
})
export class LoginFormComponent {

    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false
        console.log(f.value.last);  // false
    }

    subscribeUser( subscribeForm: NgForm){
        console.log( subscribeForm.value );
        console.log( subscribeForm.valid );
        console.log( subscribeForm.valid );
    }
}
