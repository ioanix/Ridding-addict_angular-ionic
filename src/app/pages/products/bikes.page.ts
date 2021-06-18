import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.page.html',
  styleUrls: ['./bikes.page.scss'],
})
export class BikesPage {

  bikes: Product[];
  bike = 'bike';

  constructor(private apiService: ApiService, private router: Router) {
  }

  ionViewWillEnter() {

    this.loadBikes();
  }

  private loadBikes() {

    this.apiService.get(`api/products/categories/${this.bike}`).subscribe((bikes: Product[]) => {

      this.bikes = bikes;
    });
  }

}
