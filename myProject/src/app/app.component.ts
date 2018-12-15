import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentUrl = '';
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.spinner.show();
        window.scroll( 0, 0);
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.spinner.hide();
        this.currentUrl = this.router.url;
        window.scroll( 0, 0);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        this.spinner.hide();
        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    console.log('test2');
    if (this.currentUrl === '/') {
      console.log('test3');
    }
  }
}
