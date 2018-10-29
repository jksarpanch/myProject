import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {NavModule} from './navigation/nav.module';
import {LandingComponent} from './landingPage/landing.component';
import {LiveComponent} from './live/live.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent,
    LandingComponent,
    LiveComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'landingPage', component: LandingComponent},
      {path: 'livePage', component: LiveComponent}
    ]),
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
