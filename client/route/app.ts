import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../component/login';
import {IndexComponent} from '../component/index';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'index',
  component: IndexComponent
}];

export const appRoute: ModuleWithProviders = RouterModule.forRoot(routes);

