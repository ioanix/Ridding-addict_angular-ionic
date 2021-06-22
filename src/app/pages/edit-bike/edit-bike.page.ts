import {Component} from '@angular/core';
import {BIKE_TYPES, CATEGORIES_BIKE, Product} from '../../models/product.model';
import {ApiService} from '../../services/api.service';
import {AlertController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit-bike',
  templateUrl: 'edit-bike.page.html',
})
export class EditBikePage {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  BIKE_TYPES = BIKE_TYPES;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CATEGORIES = CATEGORIES_BIKE;

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

  editBike(bike: Product) {
    this.apiSvc.put(`api/products/${this.product.productCode}`, bike).subscribe(
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
