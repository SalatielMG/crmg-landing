import { Component, Inject, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
// import { EnvironmentInterface } from '@app/shared/interfaces/environment.token.interface';
// import { ENVIRONMENT } from '@app/shared/tokens/environment.token';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    // public whatsappShare = this._environment.whatsappShare;

    constructor(
        private viewportScroller: ViewportScroller,
        // @Inject(ENVIRONMENT)
        // private readonly _environment: EnvironmentInterface
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
    }

    submit(form){
        // var name = form.name;
        
        // var email = form.email;

        // var number = form.number;
        
        // var subject = form.subject;
        
        // var message = form.message;
    }

    get emailContact() {
        return '';
        // if (!this._environment.emailContact) {
        //     return '';
        // }
        // return this._environment.emailContact;
    }

    get whatsappNumber() {
        return '';
        // if (!this.whatsappShare) {
        //     return '';
        // }
        // return `(+${this.whatsappShare.slice(0, 2)}) ${this.whatsappShare.slice(3, this.whatsappShare.length)}`;
    }

    public shareWhatsapp = () => {
        // if (this.whatsappShare) {
        //     window.open(`https://wa.me/${this.whatsappShare}?text=Hola necesito mas información, esto interesado en su servicio. Gracias`);
        // }
    }

    public mailTo = () => {
        window.open(`mailto:support@crmg.com`);
    }

}