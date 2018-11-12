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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'livePage', component: LiveComponent},
      {path: 'homePage', component: HomepageComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'aboutUs', component: AboutUsComponent}
    ]),
    NavModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
