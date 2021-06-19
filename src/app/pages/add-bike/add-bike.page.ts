import {Component} from '@angular/core';
import {BIKE_TYPES, CATEGORIES_BIKE, Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.page.html',
  styleUrls: ['./add-bike.page.scss'],
})
export class AddBikePage {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  BIKE_TYPES = BIKE_TYPES;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CATEGORIES = CATEGORIES_BIKE;

  product = new Product();

  constructor(private apiService: ApiService, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  addBike() {
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
