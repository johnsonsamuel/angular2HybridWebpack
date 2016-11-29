import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'user-details',
    templateUrl: 'app/outputbinding/user.info.tpl.html'
})

export class UserInfoComponent {
    @Output() userInfoChanged = new EventEmitter<string>();

    fetchUserInfo() {
        this.userInfoChanged.emit('Hola');
    }
}