import { Component } from '@angular/core';

@Component({
  templateUrl: './play.component.html'
  // styleUrls: ['./play.component.css']
})
export class PlayComponent {
  imageCollection = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      const url = '../assets/live/image' + (i + 1) + '.png';

      this.imageCollection[i] = {
        url: url,
        name : this.getNames(i),
        show: false
      };
    }
  }
  getNames(i): string {
    let liveName = '';
    switch (i) {
      case 0 :
        liveName = 'RichCreek';
        break;
      case 1 :
        liveName = 'Finley';
        break;
      case 2 :
        liveName = 'ALEGRIA';
        break;
      case 3 :
        liveName = 'ENFIELD RD.';
        break;
      case 4 :
        liveName = 'SOUTH 2ND BUNGLOWS';
        break;
      case 5 :
        liveName = 'KNOLLWOOD COVE RD.';
        break;
      case 6 :
        liveName = 'WEST 9TH ST.';
        break;
      case 7 :
        liveName = 'VENADO';
        break;
      case 8 :
        liveName = 'WEST 49TH ST.';
        break;
      case 9 :
        liveName = 'PEREZ';
        break;
    }
    return liveName;
  }
}