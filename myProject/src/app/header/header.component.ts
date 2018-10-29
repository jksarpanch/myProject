import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navOpened = false;

  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor() {
    this.toggleTitle();
  }

  toggleTitle() {
    $('#expandButtons').click(function (e) {
      e.stopPropagation(); // this stops the event from bubbling up to the body
    })
    $(document.body).click( () =>{
      console.log(document.getElementById('mySidenav').style.width);
      const currentWidth = document.getElementById('mySidenav').style.width;
      if (this.navOpened === true) {
        document.getElementById('mySidenav').style.width = '0';
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
