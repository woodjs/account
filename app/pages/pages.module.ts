import {NgModule} from '@angular/core';

import {FrameModule} from "../frame/frame.module";

import {PagesComponent} from './pages.component';
import {routing} from './pages.routing';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
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
    FormsComponent
  ]
})
export class PagesModule {
}