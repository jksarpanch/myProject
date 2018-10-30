import { Component } from '@angular/core';

@Component({
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {
  imageCollection = [];
  constructor() {
    for (let i = 0; i < 1; i++) {
      const url = 'src/assets/live/imageNo' + (i + 1) + '.jpg';

      this.imageCollection[i] = {
        url: url,
        show: false
      };
    }
  }
}
