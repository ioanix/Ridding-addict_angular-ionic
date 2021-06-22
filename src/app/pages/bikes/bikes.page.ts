import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.page.html',
  styleUrls: ['./bikes.page.scss'],
})
export class BikesPage {

  bikes: Product[];
  bike = 'bike';

  constructor(private apiService: ApiService, private router: Router, private authSvc: AuthService) {
  }

  ionViewWillEnter() {

    this.loadBikes();
  }

  private loadBikes() {

    this.apiService.get(`api/products/categories/${this.bike}`).subscribe((bikes: Product[]) => {

      this.bikes = bikes;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToDetails(bike: Product) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(bike),
      },
    };
    this.router.navigate(['bikes/details'], navigationExtras);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoggedIn() {
    const token = this.authSvc.getToken();
    return token !== null;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToAddBike() {

    this.router.navigateByUrl('bikes/add');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  deleteBike(bike: Product) {
    this.apiService.delete('api/products/' + bike.productCode).subscribe(() => {

      this.loadBikes();
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToEditBike(bike: Product) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(bike),
      },
    };
    this.router.navigate(['bikes/edit'], navigationExtras);
  }
}
