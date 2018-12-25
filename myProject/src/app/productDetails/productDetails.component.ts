import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


export interface IProjectData {
  projectData: any[];
}

@Component({
  templateUrl: './productDetails.component.html'
})

export class ProductDetailsComponent implements OnInit {
  projectData = {};
  imageCollection = [];

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private route: ActivatedRoute
  ) {
  }

  nextImage() {
    // @ts-ignore
    $('#projectCarousel').carousel('next');
  }

  prevImage() {
    // @ts-ignore
    $('#projectCarousel').carousel('prev');
  }

  ngOnInit() {
    this.spinner.show();
    const currentProjectId = this.route.snapshot.params['id'];
    this.http.get<IProjectData>('../assets/data/projectDetails/projectDetailsData.json')
      .pipe(
        map(data => {
          return data.projectData.filter(item => item.id == currentProjectId)[0];
        }, error => error)
      )
      .subscribe((data) => {
        setTimeout(() => {
          this.projectData = data;
          this.imageCollection = data.projectDetails;
          window.scroll(0, 0);
          this.spinner.hide();
        }, 2000);
      });
  }
}
