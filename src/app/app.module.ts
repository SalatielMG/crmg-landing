import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingHomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { CtaComponent } from './components/cta/cta.component';
import { SkillComponent } from './components/skill/skill.component';
import { FunfactsComponent } from './components/funfacts/funfacts.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyWeDifferentComponent } from './components/why-we-different/why-we-different.component';
import { WorkComponent } from './components/work/work.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BlogComponent } from './components/blog/blog.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';

@NgModule({
    declarations: [
        AppComponent,
        // LandingComponent,
        LandingHomeComponent,
        FooterComponent,
        NavbarComponent,
        WelcomeComponent,
        AboutComponent,
        StrategyComponent,
        WhoWeAreComponent,
        CtaComponent,
        SkillComponent,
        FunfactsComponent,
        HowWeWorkComponent,
        ServicesComponent,
        WhyWeDifferentComponent,
        WorkComponent,
        PricingComponent,
        FaqComponent,
        FeedbackComponent,
        BlogComponent,
        PartnerComponent,
        SubscribeComponent,
        ContactComponent,
        ServiceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        CountUpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }