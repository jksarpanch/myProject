// import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {Router, NavigationEnd} from '@angular/router';
//
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//   pushRightClass: string = 'push-right';
//   collapedSideBar: boolean;
//   collapsed: boolean = false;
//   showMenu: string = '';
//
//   @Output() collapsedEvent = new EventEmitter<boolean>();
//   constructor(public router: Router) {
//
//     this.router.events.subscribe(val => {
//       if (
//         val instanceof NavigationEnd &&
//         window.innerWidth <= 992 &&
//         this.isToggled()
//       ) {
//         this.toggleSidebar();
//       }
//     });
//   }
//
//   ngOnInit() {
//   }
//
//   isToggled(): boolean {
//     const dom: Element = document.querySelector('body');
//     return dom.classList.contains(this.pushRightClass);
//   }
//
//   toggleSidebar() {
//     const dom: any = document.querySelector('body');
//     dom.classList.toggle(this.pushRightClass);
//   }
//   toggleCollapsed() {
//     this.collapsed = !this.collapsed;
//     this.collapsedEvent.emit(this.collapsed);
//   }
//
//   rltAndLtr() {
//     const dom: any = document.querySelector('body');
//     dom.classList.toggle('rtl');
//   }
//
//   onLoggedout() {
//     localStorage.removeItem('isLoggedin');
//   }
// }
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navOpened = false;

  @Output() collapsedEvent = new EventEmitter<boolean>();
  constructor() {}

  openNav(): void {
    document.getElementById('mySidenav').style.width = '400px';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }
}
