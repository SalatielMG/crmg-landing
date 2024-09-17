import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'crmg-layout',
    templateUrl    : './layout.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
