import {Component, Input} from '@angular/core';


@Component({
    selector: 'footer-input',
    template: `Test Value : {{footerInputContent}}`
})

export class FooterInputComponent {

    @Input() footerInputContent: string = 'Footer';
}