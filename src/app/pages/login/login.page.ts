import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Login} from '../../models/login.model';
import {ApiService} from '../../services/api.service';
import {AuthResponse} from '../../models/auth.model';
import {AuthService} from '../../services/auth.service';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage {

  loginData = new Login();

  constructor(private router: Router,
              private apiService: ApiService,
              private authService: AuthService,
              private alertCtrl: AlertController) {
  }

  login(username, password) {

    this.apiService.post('api/users/login', {username, password})
      .subscribe((response: AuthResponse) => {

        console.log(response);
        this.authService.saveToken(response.token);
        this.authService.saveUserRole(response.authoritiesList);
        this.authService.saveName(response.firstName);
        this.router.navigateByUrl('/home');
      },
        (err) => {
          let message = 'Username or password are incorrect';
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

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToSignInWithGoogle() {
    this.router.navigateByUrl('/google');
  }
}

