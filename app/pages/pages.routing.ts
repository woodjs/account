import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {FormsComponent} from './forms/forms.component';
import {PagesComponent} from './pages.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }, {
    path: 'pages',
    component: PagesComponent,
    children: [{
      path: '',
      redirectTo: 'forms',
      pathMatch: 'full'
    }, {
      path: 'forms',
      component: FormsComponent
    }]
  }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);