import { Component, Inject, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ENVIRONMENT } from 'src/app/core/environment/environment.token';
import { EnvironmentInterface } from 'src/app/core/environment/environment.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    public whatsappShare = this._environment.whatsappShare;

    constructor(
        private viewportScroller: ViewportScroller,
        @Inject(ENVIRONMENT)
        private readonly _environment: EnvironmentInterface
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
        if (!this._environment.emailContact) {
            return '';
        }
        return this._environment.emailContact;
    }

    get whatsappNumber() {
        if (!this.whatsappShare) {
            return '';
        }
        return `(+${this.whatsappShare.slice(0, 2)}) ${this.whatsappShare.slice(3, this.whatsappShare.length)}`;
    }

    public shareWhatsapp = () => {
        if (this.whatsappShare) {
            window.open(`https://wa.me/${this.whatsappShare}?text=${this._environment.whatsappMessage}`);
        }
    }

    public mailTo = () => {
        window.open(`mailto:support@crmg.com`);
    }

}