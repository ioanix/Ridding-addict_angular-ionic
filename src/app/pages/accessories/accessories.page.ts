import {Component} from '@angular/core';
import {Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {NavigationExtras, Router} from '@angular/router';
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
  isLoggedInAndHasRole() {
    const token = this.authSvc.getToken();
    const userRole = this.authSvc.getRole();

    return token !== null && userRole === '[ROLE_ADMIN]';
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToDetails(accessory: Product) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(accessory),
      },
    };
    this.router.navigate(['accessories/details'], navigationExtras);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  deleteAccessory(accessory: Product) {
    this.apiService.delete('api/products/' + accessory.productCode).subscribe(() => {

      this.loadAccessories();
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToEditAccessory(accessory: Product) {

    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(accessory),
      },
    };
    this.router.navigate(['accessories/edit'], navigationExtras);
  }
}
