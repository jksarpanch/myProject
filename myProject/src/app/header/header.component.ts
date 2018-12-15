import {Component, Input, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() currentUrl;
  navOpened = false;
  constructor() {
    this.toggleTitle();
  }

  toggleTitle() {
    $(document.body).click( (e) => {
      if ((e && e.target.id !== 'expandButton')
        && (e && e.target.id !== 'collapseButton')
        && (e && e.target.className !== 'router-link-active')) {
        document.getElementById('myNav').style.width = '0%';
        this.navOpened = false;
      }
    });
  }
  openNav(): void {
    document.getElementById('myNav').style.width = '100%';
  }

  closeNav(): void {
    document.getElementById('myNav').style.width = '0%';
  }
  ngOnInit() {
    console.log(this.currentUrl);
  }
}
