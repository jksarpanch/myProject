import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navOpened = false;
  constructor() {
    this.toggleTitle();
  }

  toggleTitle() {
    $(document.body).click( (e) => {
      if ((e && e.target.id !== 'expandButton')
        && (e && e.target.id !== 'collapseButton')
        && (e && e.target.className !== 'router-link-active')) {
        document.getElementById('mySidenav').style.width = '0';
        this.navOpened = false;
      }
    });
  }
  openNav(): void {
    document.getElementById('mySidenav').style.width = '400px';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }
}
