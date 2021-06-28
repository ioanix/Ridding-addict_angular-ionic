import {Component} from '@angular/core';
import {Register, ROLES} from '../../models/register.model';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Card} from '../../models/card.model';
import {CARD_TYPES} from '../../models/order.model';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html'
})
export class RegisterPage {

  registerData = new Register();
  card = new Card();

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ROLES = ROLES;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CARD_TYPES = CARD_TYPES;

  constructor(private router: Router, private apiService: ApiService) {

    console.log(this.registerData);
  }

  register() {

    this.apiService.post('api/users/register', this.registerData).subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
