import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  imageCollection = [];
  constructor(private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) {}
  goToProject(id) {
    this.router.navigate(['productDetails', {'id': id, 'page': 'work'}]);
  }
  ngOnInit() {
    this.spinner.show();
    this.http.get('../assets/data/work/workData.json')
      .subscribe((data: any) => { setTimeout( () => {
        this.imageCollection = data.workComponent;
        window.scroll( 0, 0);
        this.spinner.hide();
      }, 2000);
      });
  }
}
