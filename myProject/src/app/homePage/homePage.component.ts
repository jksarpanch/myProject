import { Component } from '@angular/core';
import {startWith} from 'rxjs/operators';

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
        show: false,
        page: this.getPageRouterPath(i)
      };
    }
  }

  getPageRouterPath(i): string {
    switch (i) {
      case 0:
        return '/livePage';
        break;
      case 1:
        return '/play';
        break;
      case 2:
        return '/work';
        break;
    }
  }
}
