import {NgModule} from '@angular/core';

import {routing} from './pages.routing';

import {FrameModule} from '../frame/frame.module';

import {PagesComponent} from './pages.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsComponent} from "./forms/forms.component";

@NgModule({
  imports: [
    FrameModule,
    routing
  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    DashboardComponent,
    FormsComponent
  ]
})
export class PagesModule {
}