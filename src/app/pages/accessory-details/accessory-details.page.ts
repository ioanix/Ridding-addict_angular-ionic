import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-accessory-details',
  templateUrl: './accessory-details.page.html',
})
export class AccessoryDetailsPage {

  accessory = new Product();

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.accessory = JSON.parse(params.special);
      }
    });
  }

}
