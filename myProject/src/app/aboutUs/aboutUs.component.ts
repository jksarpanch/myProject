import { Component } from '@angular/core';

@Component({
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutUsComponent {
  imageCollection = [];
  singleImage: any = {};
  constructor() {
    for (let i = 0; i < 4; i++) {
      const url = '../assets/aboutUs/WorkshopNo5Branding-' + (i + 1) + '.png';

      this.imageCollection[i] = {
        url: url,
        title : this.getContactInfo(i).title,
        name : this.getContactInfo(i).name,
        description : this.getContactInfo(i).description,
        show: false
      };
    }
    this.singleImage = {
      url : '../assets/aboutUs/WorkshopNo5Branding-31.png',
      show: false
    };
  }

  getContactInfo(i): any {
    let info = {};
    switch (i) {
      case 0 :
        info = {
          title : 'FOUNDER',
          name: 'Bhavani Singal',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem tincidunt'
        };
        break;
      case 1 :
        info = {
          title : 'TITLE',
          name: 'NAME',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem tincidunt'
        };
        break;
      case 2 :
        info = {
          title : 'TITLE',
          name: 'NAME',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem tincidunt'
        };
        break;
      case 3 :
        info = {
          title : 'TITLE',
          name: 'NAME',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lorem tincidunt'
        };
        break;
    }
    return info;
  }
}
