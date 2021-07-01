import {Component} from '@angular/core';
import {ACCESSORY_TYPES, CATEGORIES_ACCESSORY, Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-accessory',
  templateUrl: 'edit-accessory.page.html',
})
export class EditAccessoryPage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ACCESSORY_TYPES = ACCESSORY_TYPES;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CATEGORIES = CATEGORIES_ACCESSORY;

  product = new Product();

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.product = JSON.parse(params.special);
      }
    });
  }

  editAccessory(accessory: Product) {
    this.apiSvc.put(`api/products/${this.product.productCode}`, accessory).subscribe(
      () => {
        this.navCtrl.back();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        }
        this.alertCtrl
          .create({
            header: 'Error',
            message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }
}
