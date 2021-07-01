import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {BikesPage} from './pages/bikes/bikes.page';
import {LoginPage} from './pages/login/login.page';
import {BikeDetailsPage} from './pages/bike-details/bike-details.page';
import {AddBikePage} from './pages/add-bike/add-bike.page';
import {EditBikePage} from './pages/edit-bike/edit-bike.page';
import {OrdersPage} from './pages/orders/order.page';
import {AddOrderPage} from './pages/add-order/add-order.page';
import {RegisterPage} from './pages/register/register.page';
import {ProductsPage} from './pages/products/products.page';
import {AccessoriesPage} from './pages/accessories/accessories.page';
import {AddAccessoryPage} from './pages/add-accessory/add-accessory.page';
import {AccessoryDetailsPage} from './pages/accessory-details/accessory-details.page';
import {EditAccessoryPage} from "./pages/edit-accessory/edit-accessory.page";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'accessories',
    component: AccessoriesPage,
  },
  {
    path: 'accessories/add',
    component: AddAccessoryPage,
  },
  {
    path: 'bikes',
    component: BikesPage,
  },
  {
    path: 'products',
    component: ProductsPage,
  },
  {
    path: 'accessories/details',
    component: AccessoryDetailsPage,
  },
  {
    path: 'accessories/edit',
    component: EditAccessoryPage,
  },
  {
    path: 'orders',
    component: OrdersPage,
  },
  {
    path: 'orders/add',
    component: AddOrderPage,
  },
  {
    path: 'bikes/details',
    component: BikeDetailsPage,
  },
  {
    path: 'bikes/add',
    component: AddBikePage,
  },
  {
    path: 'bikes/edit',
    component: EditBikePage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
