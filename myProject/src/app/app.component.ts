import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUrl = '';

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator

      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentUrl = this.router.url;
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  closeMenu(): void {
    document.getElementById('mySidenav').style.width = '0';
  }
  ngOnInit() {
    console.log('test2');
    if (this.currentUrl === '/') {
      console.log('test3');
    }
  }
}
