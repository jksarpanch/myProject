import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  
  openNav():void {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav():void {
    document.getElementById("mySidenav").style.width = "0";
}


}
