import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NavModule} from './navigation/nav.module';
import {LandingComponent} from './landingPage/landing.component';
import {LiveComponent} from './live/live.component';
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
import {WorkComponent} from './work/work.component';
import {ProductDetailsComponent} from './productDetails/productDetails.component';

@NgModule({
  declarations: [AppComponent,
    LandingComponent,
    LiveComponent,
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
    WorkComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'livePage', component: LiveComponent},
      {path: 'play', component: PlayComponent},
      {path: 'work', component: WorkComponent},
      {path: 'homePage', component: HomepageComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'aboutUs', component: AboutUsComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contactUs', component: ContactUsComponent},
      {path: 'productDetails/:id', component: ProductDetailsComponent},
      {path: 'productDetails', component: ProductDetailsComponent}
    ]),
    NavModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
