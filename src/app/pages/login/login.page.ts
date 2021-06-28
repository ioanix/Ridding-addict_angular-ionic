import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../../models/login.model';
import {ApiService} from '../../services/api.service';
import {AuthResponse} from '../../models/auth.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage {

  loginData = new Login();

  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) {
  }

  login() {

    this.apiService.post('api/users/login', this.loginData)
      .subscribe((response: AuthResponse) => {

        console.log(response);
        this.authService.saveToken(response.token);
        this.router.navigateByUrl('/home');
      });
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}

