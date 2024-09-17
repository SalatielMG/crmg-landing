import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'crmg-service-suspended',
    templateUrl    : './service-suspended.component.html',
    styleUrls    :[
        './service-suspended.component.scss'
    ],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceSuspendedComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
