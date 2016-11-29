import {Component, Input} from '@angular/core';



@Component({
    selector: 'child-selector',
    templateUrl: 'app/databinding/child.component.tpl.html'
})
export class ChildComponent {
    @Input() title = 'I\'m a nested component';
}