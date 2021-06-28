import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {CARD_TYPES, Order} from '../../models/order.model';
import {Card} from '../../models/card.model';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
})
export class AddOrderPage {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  CARD_TYPES = CARD_TYPES;
  productCodes: string[];
  order = new Order();
  card = new Card();

  constructor(private apiService: ApiService, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {

    this.getProductCodes();
  }

  getProductCodes(): string[] {

    this.apiService.get('api/productCodes').subscribe((productCodes: string[]) => {

      this.productCodes = productCodes;
    });

    return this.productCodes;
  }
  //
  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // // @ts-ignore
  // // eslint-disable-next-line @typescript-eslint/member-ordering
  // products = this.productCodes.map(code => this.apiService.get(`api/products/${code}`));

  addOrder() {
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
