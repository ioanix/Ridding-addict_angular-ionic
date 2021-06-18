import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePage} from './pages/home/home.page';
import {SideMenuComponent} from './components/side.menu/side.menu.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BikesPage} from './pages/products/bikes.page';
import {ApiService} from './services/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginPage} from './pages/login/login.page';
import {TokenInterceptor} from './interceptors/auth-token.interceptor';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePage, SideMenuComponent, NavbarComponent, BikesPage, LoginPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ApiService, AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
