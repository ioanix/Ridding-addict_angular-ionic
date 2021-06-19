import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.page.html',
  styleUrls: ['./bike-details.page.scss'],
})
export class BikeDetailsPage {

  bike = new Product();

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.bike = JSON.parse(params.special);
      }
    });
  }
}
