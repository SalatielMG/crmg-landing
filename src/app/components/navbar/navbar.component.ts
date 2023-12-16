import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ENVIRONMENT } from 'src/app/core/environment/environment.token';
import { EnvironmentInterface } from 'src/app/core/environment/environment.interface';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private viewportScroller: ViewportScroller,
        @Inject(ENVIRONMENT)
        private readonly _environment: EnvironmentInterface,
        private _cookieService: CookieService
    ) {}

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    public redirectSingIn() {
        this._cookieService.set('redirectUrlSingIn', this._environment.redirectUrlSingIn);
        location.href = this._environment.redirectUrlSingIn;
    }

    ngOnInit() {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}