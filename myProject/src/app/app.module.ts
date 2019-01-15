import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NavModule} from './navigation/nav.module';
import {LandingComponent} from './landingPage/landing.component';
import {ResidentialComponent} from './residential/residential.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomepageComponent} from './homePage/homePage.component';
import {FooterComponent} from './footer/footer.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import {ServicesComponent} from './servicesPage/services.component';
import {ContactInfoComponent} from './common/contactInfo/contactinfo.component';
import {AboutUsComponent} from './aboutUs/aboutUs.component';
import {BlogComponent} from './blog/blog.component';
import {getBrowserLoggingCb} from '@angular-devkit/build-angular';
import {ContactUsComponent} from './contactUs/contact.component';
import {PlayComponent} from './play/play.component';
import {CommercialComponent} from './commercial/commercial.component';
import {ProductDetailsComponent} from './productDetails/productDetails.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpErrorInterceptor } from './common/components/http-error.interceptor';
import { ConsultationComponent } from './common/consultation/consultation.component';

@NgModule({
  declarations: [AppComponent,
    LandingComponent,
    ResidentialComponent,
    HeaderComponent,
    SidebarComponent,
    HomepageComponent,
    FooterComponent,
    ServicesComponent,
    ContactInfoComponent,
    AboutUsComponent,
    BlogComponent,
    ContactUsComponent,
    PlayComponent,
    CommercialComponent,
    ProductDetailsComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'residential', component: ResidentialComponent},
      {path: 'play', component: PlayComponent},
      {path: 'commercial', component: CommercialComponent},
      {path: 'homePage', component: HomepageComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'aboutUs', component: AboutUsComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contactUs', component: ContactUsComponent},
      {path: 'productDetails/:page/:id', component: ProductDetailsComponent},
      {path: 'productDetails', component: ProductDetailsComponent}
    ]),
    NavModule,
    DeferLoadModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
