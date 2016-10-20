import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "../component/dashboard.component";
import {HeroesComponent} from "../component/heroes.component";
import {HeroDetailComponent} from "../component/hero-detail.component";

const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'heroes',
  component: HeroesComponent
}, {
  path: 'detail/:id',
  component: HeroDetailComponent
}];

export const appRoute: ModuleWithProviders = RouterModule.forRoot(routes);