import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {Order} from '../../models/order.model';
import {Card, CARD_TYPES} from '../../models/card.model';
import {ProductCodeAndName} from '../../models/productCodeAndName.model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
})
export class AddOrderPage {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  CARD_TYPES = CARD_TYPES;
  productCodesAndNames: ProductCodeAndName[];
  order = new Order();

  constructor(private apiService: ApiService, private navCtrl: NavController, private alertCtrl: AlertController) {
    this.order.cardDto = new Card();
  }

  ionViewWillEnter() {

    this.getProductCodesAndNames();
  }

  getProductCodesAndNames() {
    console.log('order', this.order);
    this.apiService.get('api/productCodesAndNames').subscribe((productCodesAndNames: ProductCodeAndName[]) => {

      this.productCodesAndNames = productCodesAndNames;
    });
  }

  addOrder() {
    console.log('order', this.order);
    this.apiService.post('api/orders/pay', this.order).subscribe(
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
