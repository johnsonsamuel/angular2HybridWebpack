import {Component} from '@angular/core';

@Component({
    selector : 'footer',
    templateUrl: 'app/footer/footer.html'

})

export class FooterComponent {
    childTitle = 'child title value ';

    onNotify( message ){
        alert( message )
    }

    onMouseOverNotify( message ){
        alert( message )
    }

    getFooterTitle() {
        return 'title from footer component '+ this.childTitle;
    }

    getUserInfo( message ){
        alert( message )
    }
}