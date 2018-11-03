import { Component } from '@angular/core';

@Component({
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent {
  imageCollection = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      const url = 'src/assets/live/image' + (i + 1) + '.png';

      this.imageCollection[i] = {
        url: url,
        show: false
      };
    }
  }
}
