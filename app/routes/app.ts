import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../components/login';
import {RegisterComponent} from "../components/register";
import {ForgetPasswordComponent} from "../components/forget-password";

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'forget-password',
  component: ForgetPasswordComponent
}];

export const appRoute: ModuleWithProviders = RouterModule.forRoot(routes);

