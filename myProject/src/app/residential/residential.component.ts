import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  templateUrl: './residential.component.html',
  styleUrls: ['./residential.component.css']
})
export class ResidentialComponent implements OnInit {
  imageCollection = [];
  constructor(private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) {}
  goToProject(id) {
    this.router.navigate(['productDetails', {'id': id, 'page': 'residential'}]);
  }
  ngOnInit() {
    this.spinner.show();
    this.http.get('../assets/data/residential/residentialListData.json')
      .subscribe((data: any) => { setTimeout( () => {
        this.imageCollection = data.residentialComponent;
        window.scroll( 0, 0);
        this.spinner.hide();
      }, 500);
      });
  }
}
