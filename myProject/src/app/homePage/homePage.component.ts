import { Component } from '@angular/core';

@Component({
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomepageComponent {
  imageCollection = [];
  constructor() {
    for (let i = 0; i < 2; i++) {
      const url = '../assets/homePage/homePage' + (i + 1) + '.jpg';
      this.imageCollection[i] = {
        url: url,
        show: false,
        page: this.getPageDetail(i).pageUrl,
        title : this.getPageDetail(i).title
      };
    }
  }

  getPageDetail(i) {
    switch (i) {
      case 0:
        return {
          pageUrl: '/residential',
          title: 'Residential'
        };
        break;
      case 1:
        return {
          pageUrl: '/commercial',
          title: 'Commercial'
        };
    }
  }
}
