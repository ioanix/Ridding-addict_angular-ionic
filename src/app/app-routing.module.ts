import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {BikesPage} from './pages/bikes/bikes.page';
import {LoginPage} from './pages/login/login.page';
import {BikeDetailsPage} from './pages/bike-details/bike-details.page';
import {AddBikePage} from './pages/add-bike/add-bike.page';
import {EditBikePage} from "./pages/edit-bike/edit-bike.page";

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
    path: 'bikes',
    component: BikesPage,
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
