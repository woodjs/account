import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login';
import {RegisterComponent} from './register';
import {ForgetPasswordComponent} from './forget-password';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);