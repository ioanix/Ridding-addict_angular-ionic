import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {OrderResponse} from '../../models/orderResponse.model';

@Component({
  selector: 'app-orders',
  templateUrl: './order.page.html',
})
export class OrdersPage {

  orders: OrderResponse[];

  constructor(private apiService: ApiService, private router: Router, private authSvc: AuthService) {
  }

  ionViewWillEnter() {

    this.loadOrders();
  }

  private loadOrders() {

    this.apiService.get('api/orders').subscribe((orders: OrderResponse[]) => {

      this.orders = orders;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  isLoggedIn() {
    const token = this.authSvc.getToken();
    return token !== null;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  goToAddOrder() {
    this.router.navigateByUrl('orders/add');
  }
}
