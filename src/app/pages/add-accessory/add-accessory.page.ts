import {Component} from '@angular/core';
import {ACCESSORY_TYPES, CATEGORIES_ACCESSORY, Product} from '../../models/product.model';
import {ApiService} from "../../services/api.service";
import {AlertController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-add-accessory',
  templateUrl: './add-accessory.page.html',
})
export class AddAccessoryPage {

  product = new Product();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CATEGORIES = CATEGORIES_ACCESSORY;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  ACCESSORY_TYPES = ACCESSORY_TYPES;

  constructor(private apiService: ApiService, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  addAccessory() {
    this.apiService.post('api/products', this.product).subscribe(
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
