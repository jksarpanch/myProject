import { Component } from '@angular/core';

@Component({
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomepageComponent {
  imageCollection = [];
  constructor() {
    for (let i = 0; i < 3; i++) {
      const url = '../assets/homePage/homePage' + (i + 1) + '.jpg';

      this.imageCollection[i] = {
        url: url,
        show: false
      };
    }
  }
}
