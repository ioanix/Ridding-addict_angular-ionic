import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.page.html'
})
export class AccessoriesPage {

  accessories: Product[];
  accessory = 'accessory';

  constructor(private apiService: ApiService, private router: Router, private authSvc: AuthService) {
  }

  ionViewWillEnter() {

    this.loadAccessories();
  }

  private loadAccessories() {

    this.apiService.get(`api/products/categories/${this.accessory}`).subscribe((accessories: Product[]) => {

      this.accessories = accessories;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToAddAccessory() {
    this.router.navigateByUrl('accessories/add');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoggedIn() {
    const token = this.authSvc.getToken();
    return token !== null;
  }
}
