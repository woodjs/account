import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {routing} from './pages.routing';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ]
})
export class PagesModule {
}