import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent {
    /**
     * Constructor
     */
    constructor(
        private viewportScroller: ViewportScroller
    )
    {}

    

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		rtl: false,
		dots: false,
		autoplayHoverPause: true,
		items: 1,
		autoHeight: true,
		smartSpeed: 750,
		autoplay: true,
		navText: [
			"<i class='fa fa-angle-right'></i>",
			"<i class='fa fa-angle-left'></i>"
		]
    }

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

}
