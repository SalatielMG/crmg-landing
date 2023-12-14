import { Component, HostBinding, Input } from '@angular/core';
import { ServiceInterface } from './service.interface';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: [
        './service.component.scss'
    ]
})
export class ServiceComponent {

    @HostBinding('class') class = 'col-lg-4 col-md-6';

    @Input({
        required: true
    }) service: ServiceInterface;

}