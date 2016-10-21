import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '/',
  pathMatch: 'full'
}];

export const appRoute: ModuleWithProviders = RouterModule.forRoot(routes);