import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'footer-child',
    template: `<h4>{{footerChildTitle}} 
        <hr>
        <span (click)="onClick()">Click</span>
        <hr>
        <div (mouseover)="onMouseOver()">Mouse over me</div></h4>`
    })

export class FooterChildComponent {
    @Input() footerChildTitle = 'hola';

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @Output() notifyMouseEvent: EventEmitter<string> = new EventEmitter<string>();

    onClick(){
        this.notify.emit('Clicked child comp '+ this.footerChildTitle );
    }

    onMouseOver() {
        this.notifyMouseEvent.emit('Mouse over event from child component' + this.footerChildTitle );
    }


}