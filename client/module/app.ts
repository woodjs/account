import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {Login} from '../component/login';
import {LoginMock} from '../mock/login';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(LoginMock)
  ],
  declarations: [
    Login
  ],
  bootstrap: [
    Login
  ]
})
export class App {
}