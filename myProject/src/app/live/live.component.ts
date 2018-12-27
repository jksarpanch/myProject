import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  imageCollection = [];
  constructor(private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) {}
  goToProject(id) {
    this.router.navigate(['productDetails', {'id': id, 'page': 'live'}]);
  }
  ngOnInit() {
    this.spinner.show();
    this.http.get('../assets/data/liveData.json')
      .subscribe((data: any) => { setTimeout( () => {
        this.imageCollection = data.liveComponent;
        window.scroll( 0, 0);
        this.spinner.hide();
      }, 2000);
      });
  }
}
