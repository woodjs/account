import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import '../config/rxjs-extension';

import {appRoute} from '../route/app';

import {AppComponent} from '../component/app';
import {LoginComponent} from '../component/login';

import {LoginMock} from '../mock/login';
import {RegisterComponent} from "../component/register";
import {ForgetPasswordComponent} from "../component/forget-password";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoute,
    InMemoryWebApiModule.forRoot(LoginMock)
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}