import {Injectable} from '@angular/core';

@Injectable()
export class FooterService {
    getFooterContent(){
       return 'Hola! I am a service from Angular 2';
    }
}