import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

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
  ) {
  }

  ngOnInit() {
    this.spinner.show();
    const currentProjectId = this.route.snapshot.params['id'];
    const currentPage = this.route.snapshot.params['page'];
    let currentUrl = ' ../assets/data/projectDetails/projectDetailsData.json';
    switch (currentPage) {
      case 'live':
        currentUrl = '../assets/data/projectDetails/projectDetailsData.json';
        break;
      case 'work':
        currentUrl = '../assets/data/work/projectDetails/projectDetailsData.json';
        break;
      case 'play':
        currentUrl = '../assets/data/play/projectDetails/projectDetailsData.json';
        break;
      default:
        this.router.navigate(['/']);
    }

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
        }, 2000);
      });
  }
}
