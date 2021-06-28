import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomePage} from './pages/home/home.page';
import {SideMenuComponent} from './components/side.menu/side.menu.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BikesPage} from './pages/bikes/bikes.page';
import {ApiService} from './services/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginPage} from './pages/login/login.page';
import {TokenInterceptor} from './interceptors/auth-token.interceptor';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {BikeDetailsPage} from './pages/bike-details/bike-details.page';
import {AddBikePage} from './pages/add-bike/add-bike.page';
import {EditBikePage} from './pages/edit-bike/edit-bike.page';
import {OrdersPage} from './pages/orders/order.page';
import {AddOrderPage} from './pages/add-order/add-order.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RegisterPage} from './pages/register/register.page';

@NgModule({
  declarations: [AppComponent,
    LoginPage,
    RegisterPage,
    BikesPage,
    BikeDetailsPage,
    AddBikePage,
    EditBikePage,
    HomePage,
    OrdersPage,
    AddOrderPage,
    SideMenuComponent,
    NavbarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
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
