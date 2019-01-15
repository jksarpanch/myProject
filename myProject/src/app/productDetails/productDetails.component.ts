import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
declare var lightbox:  any;

export interface IProjectData {
  projectData: any[];
}

@Component({
  styleUrls: ['./productDetails.component.css'],
  templateUrl: './productDetails.component.html'
})

export class ProductDetailsComponent implements OnInit {

  projectData = {};
  imageCollection = [];
  mainImageUrl;
  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute,
              private router: Router
  ) {}

 ngOnInit() {
    this.spinner.show();
    const currentProjectId = this.route.snapshot.params['id'];
    const currentPage = this.route.snapshot.params['page'];
    const currentUrl = ` ../assets/data/${currentPage}/projectDetails/projectDetailsData.json`;

    this.http.get<IProjectData>(currentUrl)
      .pipe(
        map(data => {
          return data.projectData.filter(item => item.id == currentProjectId)[0];
        })
      )
      .subscribe((data) => {
        setTimeout(() => {
          this.projectData = data;
          this.imageCollection = data.projectDetails;
          this.mainImageUrl = data.mainImageUrl;
          window.scroll(0, 0);
          this.spinner.hide();
          lightbox.option({
            resizeDuration: 100,
            wrapAround: true,
            alwaysShowNavOnTouchDevices : true,
            imageFadeDuration : 200,
          });
        }, 1000);

      });
  }
}
