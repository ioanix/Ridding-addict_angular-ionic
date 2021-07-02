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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterPage} from './pages/register/register.page';
import {ProductsPage} from './pages/products/products.page';
import {AccessoriesPage} from './pages/accessories/accessories.page';
import {AddAccessoryPage} from './pages/add-accessory/add-accessory.page';
import {NgxPaginationModule} from 'ngx-pagination';
import {CommonModule} from '@angular/common';
import {AccessoryDetailsPage} from './pages/accessory-details/accessory-details.page';
import {EditAccessoryPage} from './pages/edit-accessory/edit-accessory.page';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {DemoComponent} from './components/social-login/demo.component';
import {GOOGLE_OAUTH_CLIENT_ID} from './models/login.model';

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
    ProductsPage,
    AccessoriesPage,
    AddAccessoryPage,
    AccessoryDetailsPage,
    EditAccessoryPage,
    SideMenuComponent,
    NavbarComponent,
    DemoComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    FormsModule, NgbModule, NgxPaginationModule, SocialLoginModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ApiService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              GOOGLE_OAUTH_CLIENT_ID
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
