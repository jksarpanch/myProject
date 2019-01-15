import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  templateUrl: './commercial.component.html'
})
export class CommercialComponent implements OnInit {
  imageCollection = [];
  constructor(private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) {}
  goToProject(id) {
    this.router.navigate(['productDetails', {'id': id, 'page': 'commercial'}]);
  }
  ngOnInit() {
    this.spinner.show();
    this.http.get('../assets/data/commercial/commercialListData.json')
      .subscribe((data: any) => { setTimeout( () => {
        this.imageCollection = data.commercialComponent;
        window.scroll( 0, 0);
        this.spinner.hide();
      }, 500);
      });
  }
}
