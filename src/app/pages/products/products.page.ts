import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
})
export class ProductsPage {

  products: Product[];

  constructor(private apiService: ApiService, private router: Router, private authSvc: AuthService) {
  }

  ionViewWillEnter() {

    this.loadProducts();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  name = '';

  private loadProducts() {

    this.apiService.get('api/products/').subscribe((products: Product[]) => {

      this.products = products;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  addBike() {
    this.router.navigateByUrl('bikes/add');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  addAccessory() {
    this.router.navigateByUrl('accessories/add');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoggedInAndHasRole() {
    const token = this.authSvc.getToken();
    const userRole = this.authSvc.getRole();

    return token !== null && userRole === '[ROLE_ADMIN]';
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoggedIn() {
    const token = this.authSvc.getToken();
    this.name = this.authSvc.getName();

    return token !== null;
  }
}
